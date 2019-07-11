const { renameEverything } = require('./rename');


const directory = process.argv[2];

renameEverything(directory, err => {
  if(err) return console.err(err);
  console.log('Your files have been renamed');
});
