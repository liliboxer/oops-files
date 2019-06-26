const fs = require('fs');
const { createFiles } = require('./create-files');
const { readDirectory, rename, getModifiedTime } = require('./rename');

describe('rename function', () => {
  beforeEach(done => {
    createFiles('./fixtures', 15, done);
  });

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

  it('gets all files in targeted directory', done => {
    readDirectory('./fixtures', (err, files) => {
      expect(files).toHaveLength(15);
      done();
    });
  });

  it('rename a file given path and new path', done => {
    fs.readFile('./fixtures/0.txt', { encoding: 'utf8' }, (err, oldFileContent) => {
      rename('./fixtures/0.txt', './fixtures/new-name.txt', err => {
        expect(err).toBeFalsy();

        fs.readFile('./fixtures/new-name.txt', { encoding: 'utf8' }, (err, newFileContent) => {
          expect(err).toBeFalsy();
          expect(newFileContent).toEqual(oldFileContent);
          done();
        });
      });
    });
  });

  it('gets last modified date of file', done => {
    getModifiedTime('./fixtures/0.txt', (err, modifiedTime) => {
      expect(err).toBeFalsy();
      expect(modifiedTime).toEqual(expect.any(String));
      done();
    })
  };
});
