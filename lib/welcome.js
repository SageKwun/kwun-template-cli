import log from "./log.js";
import figlet from "figlet";

export const welcome = () => {
  log(figlet.textSync("welcome to use my template cli!"));
};
