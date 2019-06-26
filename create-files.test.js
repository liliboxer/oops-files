const { randomNumber, randomContent } = require('./create-files');
const fs = require('fs');

describe('create files', () => {
  afterEach(done => {
    fs.readdir('./fixtures', (err, files) => {
      if(files.length === 0) done();
      let deletedSoFar = 0;
      files.forEach(file => {
        fs.unlink(`./fixtures/${file}`, err => {
          if(err) return done(err);
          deletedSoFar += 1;
          if(deletedSoFar === files.length) done();
        });
      });
    });
  });

  it('random number', () => {
    const number = randomNumber();
    expect(number).toEqual(expect.any(Number));
  });

  it('random content', () => {
    const content = randomContent();
    expect(content).toEqual(expect.any(String));
  });

});
