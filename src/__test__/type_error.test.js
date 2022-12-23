import Bowman from '../bowman';

test('throw Type error', () => {
  // const person = new Bowman('ivan', 'person');
  expect(new Bowman('ivan', 'person')).toThrow(Error('Type is incorrect'));
});
