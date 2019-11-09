const chai = require('chai');
const expect = chai.expect;

describe('Chai File Test', () => {
  it('should compare some values', () => {
    expect(1).to.equal(1);
  });
  it('should deep equal', () => {
    expect({ n: 12 }).to.deep.equal({ n: 12 });
    expect('res').to.have.lengthOf(3, 'equal len');
  });
});
