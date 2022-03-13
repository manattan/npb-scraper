import { InsertInfo } from "./main";

const main = async () => {
  const c = new InsertInfo();
  await c.insertLeague();
  await c.insertTeam();
  await c.insertPosition();
  await c.insertPlayer();
};

main();
