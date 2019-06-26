const fs = require('fs');
const { join } = require('path');

describe('friend files', () => {
  beforeEach(done => {
    fs.writeFile(join(__dirname, './copy-me.txt'), 'Copy Me', done);
  });

  afterEach(done => {
    fs.unlink(join(__dirname, './copy-me.txt'), 'Copy Me', done);
  });

  it('put files into array', () => {
    
  });

