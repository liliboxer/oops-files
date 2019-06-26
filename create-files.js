const fs = require('fs');
const { join } = require('path');


function createFiles() {
  // const fileContent = ['dinosaur', 'dragon', 'drake', 'element', 'elf', 'goblin', 'planeswalker', 'shade', 'weird', 'wizard'];
  
  for(let i = 0; i < 15; i++) {
    const randomFileContent = fileContent[randomNumber()];
    fs.writeFile(join(__dirname, `./fixtures/${i}.txt`), `${randomFileContent}`, 'utf8', (err) => {
      if(err) throw err;
      // console.log('files made');
    });
  }
}

function randomNumber() {
  const num = Math.floor(Math.random() * 10);
  return num; 
}

function randomContent() {
  const fileContent = ['dinosaur', 'dragon', 'drake', 'element', 'elf', 'goblin', 'planeswalker', 'shade', 'weird', 'wizard'];
  const content = fileContent[randomNumber()];
  return content;
}



module.exports = { randomNumber, randomContent };

