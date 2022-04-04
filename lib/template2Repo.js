const template2Repo = {
  "react-vite": "git@github.com:SageKwun/my-react-vite-template.git",
  "react-webpack": "git@github.com:SageKwun/my-react-template.git",
  "vue-vite": "git@github.com:SageKwun/vue-template.git",
};

const templates = [];

for (let key in template2Repo) {
  if (template2Repo.hasOwnProperty(key)) {
    templates.push(key);
  }
}

export { template2Repo, templates };
