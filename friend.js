const fs = require('fs');
const { join } = require('path');


const txtContent = ['dinosaur', 'dragon', 'drake'];

for(let i = 0; i < 15; i++) {
  fs.writeFile(join(__dirname, `./${i}.txt`,));
  
}
