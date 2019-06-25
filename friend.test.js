const fs = require('fs');
const { join } = require('path');
const writeFriendFiles = require('./friend');

describe('write function', () => {
  beforeEach(done => {
    fs.writeFile(join(__dirname, 'friend-test.txt'), 'does this work', done);
  });
  afterEach(done => {
    fs.unlink(join(__dirname, 'friend-test.txt'), 'does this work', done);
  });
  it('writes a file', done => {


  });
});
