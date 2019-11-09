const assert = require('assert'); //built in assert library of node

describe('Test File', () => {
  context('Add function Test', () => {
    /* before(() => {
            console.log('in start');
        });
        after(() => {
            console.log('at last');
        });
        beforeEach(() => {
            console.error('bef every');
        });
        afterEach(() => {
            console.warn('after eeverey');
        }); */
    it('should do something', () => {
      assert.strictEqual(1, 1);
    });
    it('should match objects', () => {
      assert.deepStrictEqual({ name: 'ak' }, { name: 'ak' });
    });
    it('should return a value');
  });
});
