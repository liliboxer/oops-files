const fs = require('fs');

function createFiles(directory, count, callback) {
  let writtenSoFar = 0;
  for(let i = 0; i < count; i++) {
    fs.writeFile(`${directory}/${i}.txt`, randomContent(), err => {
      if(err) return callback(err);
      writtenSoFar += 1;
      if(writtenSoFar === count) callback();
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

createFiles('./fixtures', 15, () => {});

module.exports = { randomNumber, randomContent, createFiles };

