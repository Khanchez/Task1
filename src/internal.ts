import { Converter } from "showdown";
import "./styles.css";
import text from "../readme.md";

const run = (app: HTMLElement | null) => {
  if (app === null) {
    return;
  }
  app.innerHTML = new Converter().makeHtml(text);
};
run(document.getElementById("app"));
