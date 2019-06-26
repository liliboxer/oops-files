const fs = require('fs');
const { createFiles } = require('./create-files');
const { readDirectory, rename, getModifiedTime, readFile, renameEverything } = require('./rename');

describe('rename function', () => {
  beforeAll(done => {
    fs.mkdir('./fixtures', done);
  });
  
  beforeEach(done => {
    createFiles('./fixtures', 15, done);
  });

  afterAll(done => {
    fs.rmdir('./fixtures', done);
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
    readFile('./fixtures/0.txt', { encoding: 'utf8' }, (err, oldFileContent) => {
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
    });
  });

  it('gets content of a file', done => {
    fs.readFile('./fixtures/0.txt', { encoding: 'utf8' }, (err, expectedContent) => {
      fs.readFile('./fixtures/0.txt', { encoding: 'utf8' }, (err, resultContent) => {
        expect(err).toBeFalsy();
        expect(resultContent).toEqual(expectedContent);
        done();
      });
    });
  });

  it('renames all files in a directory to content-fileNumber-date', done => {
    renameEverything('./fixtures', err => {
      expect(err).toBeFalsy();
      fs.readdir('./fixtures', (err, files) => {
        expect(files).toHaveLength(15);
        done();
      });
    });
  });
});

