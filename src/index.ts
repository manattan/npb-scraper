import { Crowller } from "./crowller";
import { convertIntoObject } from "./crowller/convert";
import { teams } from "./data";
import { prisma } from "./lib/prisma";

const insertLeague = async () => {
  await prisma.league.create({
    data: {
      name: "pacific",
    },
  });
  await prisma.league.create({
    data: {
      name: "central",
    },
  });
};
insertLeague();

const insertTeam = async () => {
  for (const team of teams) {
    await prisma.team.create({
      data: {
        name: team.name,
        initial: team.initial,
        leagueId: team.league === "pacific" ? 1 : 2,
      },
    });
  }
};
insertTeam();

const insertPosition = async () => {
  const positions: string[] = [];
  for (const team of teams) {
    for (let i = 1; i < 140; i++) {
      const url = team.targetUrl(i);
      const crowller = new Crowller(url);
      const dom = await crowller.getHtml();
      const elements = convertIntoObject(dom);
      for (const el of elements) {
        if (el.position) {
          const p = el.position.replace("／", "/");
          if (positions.indexOf(p) === -1) positions.push(p);
        }
      }
      console.log("team: ", team.initial, " num: ", i);
    }
  }

  for (const position of positions) {
    await prisma.position.create({
      data: {
        name: position,
      },
    });
  }
};
insertPosition();
