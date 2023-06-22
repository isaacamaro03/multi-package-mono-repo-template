import childProcess from 'child_process';
import fs from 'fs';
import path from 'path';

const packagePath = process.cwd();
const buildFolderName = 'dist';

async function copyFiles() {
  const destFolder = path.join(packagePath, buildFolderName);

  const files = ['package.json', 'README.md'];

  const copyFile = (fileName) => {
    const filePath = path.join(packagePath, fileName);
    const destFilePath = path.join(destFolder, fileName);
    fs.copyFileSync(filePath, destFilePath);
  };

  if (Array.isArray(files)) {
    files.forEach(copyFile);
  }
}

function build() {
  const rollupConfigPath = '../../rollup.config.mjs';
  childProcess.exec(`rollup -c ${rollupConfigPath}`, (_, stdout, stderr) => {
    console.log(stdout);
    console.error(stderr);
  });
}

async function run() {
  try {
    fs.mkdirSync(buildFolderName);
    build();
    copyFiles();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
