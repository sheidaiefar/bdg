const fs = require("fs");
const merge = require("deepmerge");
const baseDir = "./projects/budget/src/";
const baseOutputDir = `${baseDir}assets/`;
if (fs.existsSync(baseOutputDir)) {
  if (!fs.existsSync(baseOutputDir + "i18n/")) {
    fs.mkdirSync(baseOutputDir + "i18n/");
  }

  getDirectories();
} else {
  console.error("assets not found");
}

function getDirectories() {
  fs.readdir(`${baseDir}i18n`, function (err, files) {
    for (let i = 0; i < files?.length; i++) {
      getJsonFiles(files[i]);
    }
  });
}

function getJsonFiles(root) {
  const outputFile = `${baseOutputDir}i18n/${root}.json`;
  fs.readdir(`${baseDir}i18n/${root}`, function (err, files) {
    const translateFiles = [];
    for (let j = 0; j < files.length; j++) {
      let jsonFile = fs.readFileSync(
        `${baseDir}/i18n/${root}/${files[j]}`,
        "utf8"
      );
      translateFiles.push(JSON.parse(jsonFile));
    }

    writeJson(outputFile, translateFiles);
  });
}

function writeJson(output, translateFiles) {
  const mergedFile = merge.all(translateFiles);
  fs.writeFile(output, JSON.stringify(mergedFile), "utf8", function (err) {
    if (err) console.error(err);
  });
}
