import chalk from "chalk";

const log = (msg, color = "blue", ...args) =>
  console.log(chalk[color](msg, args));

export default log;
