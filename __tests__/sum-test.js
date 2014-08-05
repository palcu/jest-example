jest.dontMock('../src/sum');

describe('sum', function() {
  it('adds 1 + 2 to equal 3', function() {
    debugger;
    var sum = require('../src/sum');
    expect(sum(1, 2)).toBe(3);
  });
});
