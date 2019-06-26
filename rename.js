const fs = require('fs');

const readDirectory = (directory, callback) => {
  fs.readdir(directory, (err, files) => {
    callback(err, files);
  });
);

const rename = (path, newPath, callback) => {
  fs.rename(path, newPath, err => {
    callback(err);
  })
}

const getModifiedTime = (path, callback) => {
  fs.state(path, (err, stats) => {
    callback(err, stats && stats.mtime.toIOSString());
  })
}

module.exports = {readDirectory, rename, getModifiedTime }