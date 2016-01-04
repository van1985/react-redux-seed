import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Counter from '../components/Counter';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

describe('Counter', ()=>{

  beforeEach(() => {
     //TODO: Empty for the moment...
  	});

  it ('should be a div', ()=>{
    const renderer = TestUtils.createRenderer();
    renderer.render(<Counter />);
    const actual = renderer.getRenderOutput().type;
    const expected ='div';
    expect(actual).toIncludeJSX(expected);
  });
});
