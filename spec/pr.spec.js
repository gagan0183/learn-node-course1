var request = require('request');

describe('test for sample', () => {
  it('9 * 10 is 90', () => {
    expect(9 * 10).toBe(90);
  });

  it('This is a get request', (done) => {
    request('http://localhost:9000/messages', (err, res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });
});
