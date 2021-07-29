const fs = require("fs");

const baseDir = "./projects/budget/src/assets/icons";
getDirectories();

function getDirectories() {
  fs.readdir(baseDir, function (err, dirs) {
    let iconList = [];
    for (let i = 0; i < dirs?.length; i++) {
      getSVGFiles(dirs[i]).then((res) => {
        if (res) {
          iconList = iconList.concat(res);
        }
        if (i === dirs.length - 1) {
          writeJson(iconList);
        }
      });
    }
  });
}

function getSVGFiles(dir) {
  return new Promise((resolve) => {
    fs.readdir(`${baseDir}/${dir}`, function (err, files) {
      const svgList = [];
      if (files) {
        for (let file of files) {
          svgList.push({
            name: file.split(".")[0],
            path: `assets/icons/${dir}/${file}`,
          });
        }
        resolve(svgList);
      }
    });
  });
}

function writeJson(svgList) {
  fs.writeFile(
    baseDir + "/icon-list.json",
    JSON.stringify(svgList),
    "utf8",
    function (err) {
      if (err) console.error(err);
    }
  );
}
