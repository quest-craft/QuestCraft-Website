const { readFileSync, writeFileSync } = require('fs')

const replaceBetween = function (string, start, end, what) {
  return string.substring(0, start) + what + string.substring(end);
};

let config = readFileSync("./_config.yml").toString();

const exec = require("child_process").exec;
function execute(command, callback) {
  exec(command, function (error, stdout, stderr) {
    callback(stdout.toString());
  });
}

const repoKeyIndex = config.indexOf("repo:");
if (repoKeyIndex !== -1) {
  const newLine = config.indexOf("\n", repoKeyIndex);

  execute("git config --get remote.origin.url", (url) => {
    config = replaceBetween(
      config,
      repoKeyIndex,
      newLine,
      'repo: ' + url.replace("https://github.com/", "") + "\n"
    );
    writeFileSync("./_config.yml", config);
  });
}
