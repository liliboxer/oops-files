const fs = require('fs');

const readDirectory = (directory, callback) => {
  fs.readdir(directory, callback);
};

const rename = (path, newPath, callback) => {
  fs.rename(path, newPath, err => {
    callback(err);
  });
};

const getModifiedTime = (path, callback) => {
  fs.stat(path, (err, stats) => {
    callback(err, stats && stats.mtime.toISOString());
  });
};

const readFile = (path, callback) => {
  fs.readFile(path, { encoding: 'utf8' }, callback);
};

const renameEverything = (directory, callback) => {
  readFile(directory, (err, files) => {
    let renamedSoFar = 0;
    if(err) return callback(err);
    files.forEach(file => {
      readFile(`${directory}/${file}`, (err, fileContent) => {
        getModifiedTime(`${directory}/${file}`, (err, modifiedTime) => {
          if(err) return callback();
          const number = file.split('.'[0]);
          rename(`${readDirectory}/${file}`, `${directory}/${fileContent}-${number}-${modifiedTime}`, (err, callback) => {
            if(err) return callback(err);
            renamedSoFar ++;
            if(renamedSoFar === files.length) callback();
          });
        });
      });
    });
  });
};

module.exports = { 
  readDirectory, 
  rename, 
  readFile,
  getModifiedTime, 
  renameEverything 
};
