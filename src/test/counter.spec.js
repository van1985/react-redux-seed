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

  /**
  * Check element type of the DOM
  **/
  it ('should be a div', ()=>{
    const renderer = TestUtils.createRenderer();
    renderer.render(<Counter />);
    const actual = renderer.getRenderOutput().type;
    const expected ='div';
    expect(actual).toIncludeJSX(expected);
  });

  describe('isActive', ()=>{

    function renderCounter(isActive,className){
      const renderer = TestUtils.createRenderer();
      renderer.render(<Counter isActive={isActive} />);
      return renderer.getRenderOutput()
        .props.className.includes(className+' counter');
    }

    /**
    * Check if the class is inactive
    **/
    it ('should show the counter as inactive - class', ()=>{
      /*
      const renderer = TestUtils.createRenderer();
      renderer.render(<Counter isActive={false} />);
      const actual = renderer.getRenderOutput()
        .props.className.includes('inactive counter');
      console.log(actual);
      const expected =true;
      */

      expect(renderCounter(false,'inactive')).toEqual(true);
    });

    /**
    * Check if the class is active
    **/
    it ('should show the counter as active - class', ()=>{
      /*
      const renderer = TestUtils.createRenderer();
      renderer.render(<Counter isActive={true} />);
      const actual = renderer.getRenderOutput()
        .props.className.includes('active counter');
      const expected =true;
      */

      expect(renderCounter(true,'active')).toEqual(true);
    });
  });

});
