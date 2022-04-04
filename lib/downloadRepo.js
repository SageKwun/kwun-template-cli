import gitPullOrClone from "git-pull-or-clone";
import ora from "ora";
import { resolve } from "path";
import { template2Repo } from "./template2Repo.js";

const downloadRepo = async (dirName, template, callback) => {
  const repoURL = template2Repo[template];
  const spinner = ora(`🚀🚀🚀开始下载 ${repoURL}`).start();
  await gitPullOrClone(
    repoURL,
    resolve(`./${dirName}`),
    {
      depth: Infinity,
    },
    (e) => {
      if (e) {
        spinner.fail();
        return;
      }
      spinner.succeed(` 🚗🚗🚗下载完成`);
      callback();
    }
  );

  return { spinner };
};

export default downloadRepo;
