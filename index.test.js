const chai = require('chai');
const sinon = require('sinon');
// chai.use(sinon);
const expect = chai.expect;

const index = require('./index');

describe('Testing IndexJS', () => {

  context('add', () => {
    it('should return a value', () => {
      expect(index.add(1, 4)).to.be.a('number').to.equal(5);
    });
  });

  context('add callback', () => {
    it('should test callback', (done) => {
      index.addCallback(1, 2, (err, res) => {
        expect(err).to.not.exist;
        expect(res).to.equal(3);
        done();
      })
    });
  });

  context('add promise', () => {
    it('should test promise', () => {
       return index.addPromise(1,6).then(res => expect(res).to.equal(7));
    });
    it('should test with async await', async () => {
      const res = await index.addPromise(1,2);
      expect(res).to.equal(3);
    });
  });

  context('foo function', () => {
    it('should call console.log', () => {
      const spy = sinon.spy(console, 'log');
      index.foo();
      expect(spy.calledOnce).to.be.true;
      spy.restore();
    });
    /* it('should call console.warn', () => {
      const spy = sinon.spy(console, 'warn');
      index.foo();
      expect(spy.calledOnce).to.be.true;
      spy.restore();
    }); */
    it('should stub console.warn', () => {
      const stub = sinon.stub(console, 'warn').callsFake(() => console.log('testttt'));
      index.foo();
      expect(stub.calledOnce).to.be.true;
      expect(stub.calledWith()).to.be.true;
      stub.restore();
    });
  });
});