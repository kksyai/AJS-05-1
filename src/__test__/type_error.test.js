import Bowman from '../bowman';

test('throw Type error', () => {
  expect(() => new Bowman('ivan', 'person')).toThrow(Error('Type is incorrect'));
});
