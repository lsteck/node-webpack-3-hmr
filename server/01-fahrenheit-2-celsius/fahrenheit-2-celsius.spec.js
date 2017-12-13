let fahrenheit2celsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

describe('a fahrenheit2celsius feature', () => {
  it('has a working test infrastructure', () => {
    true.should.be.true();
  });

  it('fahrenheit2celsius(32) === 0', () => {
    fahrenheit2celsius(32).should.equal(0);
  });

  it('fahrenheit2celsius(212) === 100', () => {
    fahrenheit2celsius(212).should.equal(100);
  });

  it('fahrenheit2celsius(50) === 10', () => {
    fahrenheit2celsius(50).should.equal(10);
  });
});
