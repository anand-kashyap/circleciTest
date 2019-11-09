const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const pal = require('../pallindrome');

describe('Pallindrome Testing', () => {
  context('Testing Rverse function', () => {
    it('should return string or number value', () => {
      const res = pal.reverse('red');
      expect(typeof res === 'string' || typeof res === 'number').to.true;
    });

    it(' should reverse red', () => {
      const res = pal.reverse('red');
      expect(res).to.equal('der');
    });

    it('should reverse acklo', () => {
      const res = pal.reverse('acklo');
      expect(res).to.equal('olkca');
    });

    it('should handle nums and reverse 1258361', () => {
      const res = pal.reverse(1258361);
      expect(res).to.equal(1638521);
    });

    it('should reverse arnold schwas', () => {
      const res = pal.reverse('arnold schwas');
      expect(res).to.equal('sawhcs dlonra');
    });

    /* it('should fail', () => {
      const res = sinon.stub(pal, 'reverse').callsFake(() => {
        console.log('failed intentionally');
        return;
      });
      pal.reverse('str');
      expect(res).to.be.a('number');
    }); */
  });
});
