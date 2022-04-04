import { welcome } from "../lib/welcome.js";
import getDirName from "../lib/getDirName.js";
import whichTemplate from "../lib/whichTemplate.js";
import downloadRepo from "../lib/downloadRepo.js";
import finished from "../lib/finished.js";

// todo 解析命令行

(async () => {
  await welcome();
  const dirName = await getDirName();
  const template = await whichTemplate();
  const { spinner } = await downloadRepo(dirName, template, finished);
})();
