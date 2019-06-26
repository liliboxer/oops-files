const fs = require('fs');
const { join } = require('path');

fs.readdir(join(__dirname, './files/'), (err, files) => {
  if(err) throw err; 
  files.forEach(file => {
    fs.readfFile(join(__dirname, './files/'), (err, content) => {
      if(err) throw err;
      console.log(content);
      console.log(file);
    });
  });
});
