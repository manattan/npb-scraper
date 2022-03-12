import { rmdirSync } from "fs";

export type ConvertResult = {
  year: number;
  name: string | null;
  position: string | null;
};

export const convertIntoObject = (dom: Document): ConvertResult[] => {
  const trs = dom.querySelectorAll("tr");
  const res: ConvertResult[] = [];
  for (const tr of trs) {
    const tds = tr.querySelectorAll("td");
    const year = parseInt(tds[0].textContent!.substring(0, 4));

    // 年度内に複数人存在する場合
    if (tds[1].querySelectorAll("br").length > 0) {
      for (let i = 0; i < tds[1].childNodes.length; i++) {
        if (
          tds[1].childNodes[i].textContent! &&
          tds[2].childNodes[i].textContent!
        ) {
          res.push({
            year,
            name: tds[1].childNodes[i].textContent!,
            position: tds[2].childNodes[i].textContent!,
          });
        }
      }
    } else {
      const name = tds[1].textContent! !== "　" ? tds[1].textContent! : null;
      const position =
        tds[2].textContent! !== "　" ? tds[2].textContent! : null;

      res.push({
        year,
        name,
        position,
      });
    }
  }

  return res.slice(1);
};
