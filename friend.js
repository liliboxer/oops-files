const fs = require('fs');
const { join } = require('path');

const fileContent = ['dinosaur', 'dragon', 'drake', 'element', 'elf', 'goblin', 'planeswalker', 'shade', 'weird', 'wizard'];

for(let i = 0; i < 15; i++) {
  const randomFileContent = fileContent[Math.floor(Math.random() * 10)];
  fs.writeFile(join(__dirname, `./files/${i}.txt`), `${randomFileContent}`, 'utf8', (err) => {
    if(err) console.log(err);
    console.log('files made');
  });
}
