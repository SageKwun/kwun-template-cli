import inquirer from "inquirer";

export const getDirName = async () => {
  const { dirName } = await inquirer.prompt([
    {
      type: "input",
      message: "新项目叫什么名字呢？",
      name: "dirName",
      default: "react-vite-app", // 默认值
    },
  ]);
  return dirName;
};

export default getDirName;
