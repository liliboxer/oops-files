const fs = require('fs');
const { join } = require('path');


const fileContent = ['dinosaur', 'dragon', 'drake', 'element', 'goblin', 'planeswalker', 'shade', 'weird', 'wizard'];
const randomFileContent = fileContent[Math.floor(Math.random() * 10)];

for(let i = 0; i < 15; i++) {
  fs.writeFile(join(__dirname, `./files/${i}.txt`), `${randomFileContent}`, 'utf8', (err) => {
    if(err) console.log(err);
    console.log('files made');
  });
}
