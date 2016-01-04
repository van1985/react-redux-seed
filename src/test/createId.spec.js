import expect from 'expect';
import createId from '../utilities/createId';

describe('createId', ()=>{

  it('should convert a description into a unique ID', ()=>{
      const actual = createId(123,'Cool Example');
      const expected = '123-cool-example';
      expect(actual).toEqual(expected);
  });
});
