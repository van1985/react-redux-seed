//import create from './Store';
import { createStore } from 'redux'
import expect from 'expect';


describe('store', () => {
    var store;

    const quotesList = (state = [], action) => {
        var index;
        switch (action.type) {
            case 'ADD_QUOTE_BY_ID':
                // Original state should not be modified. We are retuning an updated copy
                return [...state, action.payload];
            case 'REMOVE_QUOTE_BY_ID':
                index = state.findIndex(element => {
                    return element.id === action.payload.id;
                });
                // Original state should not be modified. We are retuning an updated copy
                return [
                    ...state.slice(0, index),
                    ...state.slice(index + 1)
                ]
            case 'LIKE_QUOTE_BY_ID':
                index = state.findIndex(element => {
                    return element.id === action.payload.id;
                });

                // Original state should not be modified. We are retuning an updated copy
                return [
                    ...state.slice(0, index),
                    Object.assign({}, state[index], {'likeCount': state[index].likeCount + 1}),
                    ...state.slice(index + 1)
                ]
            case 'UNLIKE_QUOTE_BY_ID':
                index = state.findIndex(element => {
                    return element.id === action.payload.id;
                });

                // Original state should not be modified. We are retuning an updated copy
                return [
                    ...state.slice(0, index),
                    Object.assign({}, state[index], {'likeCount': state[index].likeCount - 1}),
                    ...state.slice(index + 1)
                ]
            default:
                return state;
        }
    }

    beforeEach(() => {
        store = createStore(quotesList);
    });

    it('should work with a series of actions', () => {

        const actions = [
            {
                type: 'ADD_QUOTE_BY_ID',
                payload: {
                    text: 'The best way to...',
                    author: 'Mark Twain',
                    id: 1,
                    likeCount: 24
                }
            },
            {
                type: 'ADD_QUOTE_BY_ID',
                payload: {
                    text: 'Wahtever you are, be a good one.',
                    author: 'Abraham Lincoln',
                    id: 2,
                    likeCount: 0
                }
            },
            {
                type: 'REMOVE_QUOTE_BY_ID',
                payload: {
                    id: 1
                }
            },
            {
                type: 'LIKE_QUOTE_BY_ID',
                payload: {
                    id: 2
                }
            },
            {
                type: 'LIKE_QUOTE_BY_ID',
                payload: {
                    id: 2
                }
            },
            {
                type: 'UNLIKE_QUOTE_BY_ID',
                payload: {
                    id: 2
                }
            }
        ];

        actions.forEach(action => store.dispatch(action));

        const actual = store.getState();

        const expected = [
            {
                text: 'Wahtever you are, be a good one.',
                author: 'Abraham Lincoln',
                id: 2,
                likeCount: 1
            }
        ];

        expect(actual).toEqual(expected);


    })

});