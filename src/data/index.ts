export type Team = {
  id: number;
  name: string;
  initial: string;
  league: "pacific" | "central";
  targetUrl: (num: number) => string;
};

export const teams: Team[] = [
  {
    id: 1,
    name: "北海道日本ハムファイターズ",
    initial: "F",
    league: "pacific",
    targetUrl: (num: number) =>
      `http://sebango.web.fc2.com/sebangou${num}/n-fighters-sebangou${num}.html`,
  },
  {
    id: 2,
    name: "福岡ソフトバンクホークス",
    initial: "H",
    league: "pacific",
    targetUrl: (num: number) =>
      `http://sebango.web.fc2.com/sebangou${num}/f-d-hawks-sebangou${num}.html`,
  },
  {
    id: 3,
    name: "埼玉西武ライオンズ",
    initial: "L",
    league: "pacific",
    targetUrl: (num: number) =>
      `http://sebango.web.fc2.com/sebangou${num}/s-lions-sebangou${num}.html`,
  },
  {
    id: 4,
    name: "オリックス・バッファローズ",
    initial: "Bs",
    league: "pacific",
    targetUrl: (num: number) =>
      `http://sebango.web.fc2.com/sebangou${num}/o-bluewave-sebangou${num}.html`,
  },
  {
    id: 5,
    name: "東北楽天ゴールデンイーグルス",
    initial: "E",
    league: "pacific",
    targetUrl: (num: number) =>
      `http://sebango.web.fc2.com/sebangou${num}/t-r-goldeneagles-sebangou${num}.html`,
  },
  {
    id: 6,
    name: "千葉ロッテマリーンズ",
    initial: "M",
    league: "pacific",
    targetUrl: (num: number) =>
      `http://sebango.web.fc2.com/sebangou${num}/c-l-marines-sebangou${num}.html`,
  },
  {
    id: 7,
    name: "横浜DeNAベイスターズ",
    initial: "De",
    league: "central",
    targetUrl: (num: number) =>
      `http://sebango.web.fc2.com/sebangou${num}/y-baystars-sebangou${num}.html`,
  },
  {
    id: 8,
    name: "東京ヤクルトスワローズ",
    initial: "Ys",
    league: "central",
    targetUrl: (num: number) =>
      `http://sebango.web.fc2.com/sebangou${num}/y-swallows-sebangou${num}.html`,
  },
  {
    id: 9,
    name: "広島東洋カープ",
    initial: "C",
    league: "central",
    targetUrl: (num: number) =>
      `http://sebango.web.fc2.com/sebangou${num}/h-t-carp-sebangou${num}.html`,
  },
  {
    id: 10,
    name: "中日ドラゴンズ",
    initial: "D",
    league: "central",
    targetUrl: (num: number) =>
      `http://sebango.web.fc2.com/sebangou${num}/c-dragons-sebangou${num}.html`,
  },
  {
    id: 11,
    name: "阪神タイガース",
    initial: "T",
    league: "central",
    targetUrl: (num: number) =>
      `http://sebango.web.fc2.com/sebangou${num}/h-tigers-sebangou${num}.html`,
  },
  {
    id: 12,
    name: "読売ジャイアンツ",
    initial: "G",
    league: "central",
    targetUrl: (num: number) =>
      `http://sebango.web.fc2.com/sebangou${num}/y-giants-sebangou${num}.html`,
  },
];
