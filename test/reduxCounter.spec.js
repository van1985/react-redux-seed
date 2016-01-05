//import create from './Store';
import { createStore } from 'redux'
import expect from 'expect';

describe('store', () => {
    var store, counter;

    before(() => {
        counter = (state = 0, action) => {
            switch (action.type) {
                case 'INCREMENT':
                    return state + 1;
                case 'DECREMENT':
                    return state - 1;
                default:
                    return state;
            }
        }
    })

    beforeEach(() => {
        store = createStore(counter);
    });

    it('should increment counter', () => {

        store.dispatch({
            type: 'INCREMENT'
        });

        const actual = store.getState();

        expect(actual).toEqual(1);
    })

    it('should decrement counter', () => {

        store.dispatch({
            type: 'DECREMENT'
        });

        const actual = store.getState();

        expect(actual).toEqual(-1);
    })

    it('should return default counter value', () => {

        store.dispatch({
            type: 'FAKE'
        });

        const actual = store.getState();

        expect(actual).toEqual(0);
    })

});