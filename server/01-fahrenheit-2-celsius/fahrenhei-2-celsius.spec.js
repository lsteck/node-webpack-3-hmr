let fahrenheit2celsius = () => 0;

describe.only('a fahrenheit2celsius feature', () => {
  it('has a working test infrastructure', () => {
    true.should.be.true();
  });

  it('fahrenheit2celsius(32) === 0', () => {
    fahrenheit2celsius(32).should.equal(0);
  });

  it('fahrenheit2celsius(212) === 100');
  it('fahrenheit2celsius(50) === 10');
});
