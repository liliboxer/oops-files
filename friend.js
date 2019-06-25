const fs = require('fs');
const { join } = require('path');


const txtContent = ['dinosaur', 'dragon', 'drake', 'element', 'goblin', 'planeswalker', 'shade', 'weird', 'wizard'];

const randomNum = Math.floor(Math.random() * 10);
console.log(randomNum);



for(let i = 0; i < 15; i++) {
  fs.writeFile(join(__dirname, `./files/${i}.txt`, `${}`));
}
