import fetch from "node-fetch";
import { decodeAsText } from "../lib/decode";
import { JSParser } from "../lib/jsdom";

export class Crowller {
  constructor(private url: string) {}

  getUrl(): string {
    return this.url;
  }

  async getHtml(): Promise<Document> {
    const res = await fetch(this.url, {
      headers: {
        "Content-Type": "text/html;charset=UTF-8",
      },
    });

    const arrayBuffer = await res.arrayBuffer();
    const html = decodeAsText(arrayBuffer, "shift-jis");
    return JSParser.parseFromString(html, "text/html");
  }
}
