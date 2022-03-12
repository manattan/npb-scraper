import { JSDOM } from "jsdom";

export const JSParser = new new JSDOM().window.DOMParser();
