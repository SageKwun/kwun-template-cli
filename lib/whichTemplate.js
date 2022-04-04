import inquirer from "inquirer";
import { templates } from "./template2Repo.js";

export const whichTemplate = async () => {
  const { template } = await inquirer.prompt([
    {
      type: "list",
      message: "你想用哪个模版呢？",
      name: "template",
      choices: templates,
      default: templates[0], // 默认值
    },
  ]);

  return template;
};

export default whichTemplate;
