// /lib/getDirName.js
import inquirer from "inquirer";

export const getDirName = async () => {
  const { dirName } = await inquirer.prompt([
    {
      type: "input", // 客官需要输入的类型
      message: "新项目叫什么名字呢？", // 询问的问题内容
      name: "dirName", // 获取的值的含义（保存的变量名）
      default: "react-vite-app", // 默认值
    },
  ]);
  return dirName; // 返回 dirName
};

export default getDirName;
