import log from "./log.js";

export const finished = (dirName) => {
  log("已完成");
  //   log("已完成。现在执行以下命令运行项目：");
  //   log(`cd ${dirName}`);
  //   log(`npm run dev`)
};

export default finished;
