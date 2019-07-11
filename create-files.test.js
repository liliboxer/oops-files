const { randomNumber, randomContent, createFiles } = require('./create-files');

const fs = require('fs');

describe('create files', () => {
  beforeAll(done => {
    fs.mkdir('./fixtures', done);
  });

  // afterAll(done => {
  //   fs.rmdir('./fixtures', done);
  // });

  // afterEach(done => {
  //   fs.readdir('./fixtures', (err, files) => {
  //     if(files.length === 0) done();
  //     let deletedSoFar = 0;
  //     files.forEach(file => {
  //       fs.unlink(`./fixtures/${file}`, err => {
  //         if(err) return done(err);
  //         deletedSoFar += 1;
  //         if(deletedSoFar === files.length) done();
  //       });
  //     });
  //   });
  // });

  it('random number', () => {
    const number = randomNumber();
    expect(number).toEqual(expect.any(Number));
  });

  it('random content', () => {
    const content = randomContent();
    expect(content).toEqual(expect.any(String));
  });

  it('write file with random content', done => {
    createFiles('./fixtures', 15, err => {
      expect(err).toBeFalsy();
      fs.readdir('./fixtures', { encoding: 'utf8' }, (err, files) => {
        expect(files).toHaveLength(15);
        done();
      });
    });
  });

});
