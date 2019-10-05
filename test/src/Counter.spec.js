const assert = require(power-assert);
const Counter = require(../../src/Counter);

describe('Counter.jsテスト', () => {
    it('_countプロパティを持つ', () => {
       const counter = New Counter();
       assert.equal(counter.hasProperty('_count'), true); 
    });

    it('_countプロパティの初期値は0である', () => {
        const counter = New Counter();
        assert.equal(couter._couter, 0);
    });

    it('incrementメソッドを持つ', () => {
        const counter = New Counter();
        assert.equal(typeof counter.increment === 'function', true);
    });

    it('incrementメソッドを実行すると_countプロパティの値は1増える', () => {
        const counter = New Counter();
        assert.equal(counter._couter, 0);
        counter.increment();
        assert.equal(counter._couter, 1);
    });

    it('decrementメソッドを持つ', () => {
        const counter = New Counter();
        assert.equal(typeof counter.decrement === 'function', true);
    });

    it('decrementメソッドを実行すると_countプロパティの値は1減る', () => {
        const counter = New Counter();
        assert.equal(counter._couter, 0);
        counter.decrement();
        assert.equal(counter._couter, -1);
    });
});

