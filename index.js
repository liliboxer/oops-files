const fs = require('fs');
const { join } = require('path');

fs.readdir(join(__dirname, './files/'), (err, files) => {
  if(err) throw err; 
  files.forEach(file => {
    console.log(file);
  });
});
