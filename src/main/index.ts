import { Crowller } from "../crowller";
import { teams } from "../data";
import { prisma } from "../lib/prisma";
import { convertIntoObject } from "./convert";

export class InsertInfo {
  constructor() {}

  insertLeague = async () => {
    console.log("insert...league");
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
    console.log("inserted!");
  };

  insertTeam = async () => {
    for (const team of teams) {
      console.log("insert...", team.name);
      await prisma.team.create({
        data: {
          name: team.name,
          initial: team.initial,
          leagueId: team.league === "pacific" ? 1 : 2,
        },
      });
      console.log("inserted!");
    }
  };

  insertPosition = async () => {
    const positions: string[] = [];
    for (const team of teams) {
      for (let i = 0; i < 140; i++) {
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
      }
    }
    console.log("positions: ", positions);
    for (const position of positions) {
      await prisma.position.create({
        data: {
          name: position,
        },
      });
    }
  };

  insertPlayer = async () => {
    for (const team of teams) {
      for (let i = 0; i < 140; i++) {
        const url = team.targetUrl(i);
        const crowller = new Crowller(url);
        const elements = convertIntoObject(await crowller.getHtml());
        for (const el of elements) {
          if (!el.position || !el.name) continue;
          const position = await prisma.position.findFirst({
            where: {
              name: el.position,
            },
          });
          if (!position) continue;

          console.log("insert...");
          console.log({
            year: el.year,
            name: el.name,
            teamId: team.id,
          });
          await prisma.player.create({
            data: {
              year: el.year,
              name: el.name,
              positionId: position.id,
              teamId: team.id,
              uniformNumber: i,
            },
          });
          console.log("inserted!");
        }
      }
    }
  };
}
