const { randomNumber, randomContent } = require('./create-files');
// const fs = require('fs');
// const { join } = require('path');

describe('create files', () => {
  // beforeEach(done => {
  //   fs.writeFile(join(__dirname, './copy-me.txt'), 'Copy Me', done);
  // });

  // afterEach(done => {
  //   fs.unlink(join(__dirname, './copy-me.txt'), 'Copy Me', done);
  // });

  it('random number', () => {
    const number = randomNumber();
    expect(number).toEqual(expect.any(Number));
  });

  it('random content', () => {
    const content = randomContent();
    expect(content).toEqual(expect.any(String));
  });

});
