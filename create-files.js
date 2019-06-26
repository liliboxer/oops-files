const fs = require('fs');
const { join } = require('path');


function createFiles() {

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



module.exports = { randomNumber, randomContent, createFiles };

