describe.only('a fahrenheit2celsius feature', () => {
  it('has a working test infrastructure', () => {
    true.should.be.true();
  });

  it('fahrenheit2celsius(32) === 0');
  it('fahrenheit2celsius(212) === 100');
  it('fahrenheit2celsius(50) === 10');
});
