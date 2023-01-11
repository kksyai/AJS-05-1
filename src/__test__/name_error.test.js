import Character from '../character';
// import Deamon from '../deamon';

test('throw Name error', () => {
  // const person = new Deamon('ivanivanivan', 'Deamon');
  expect(() => new Character('ivanivanivan', 'Deamon')).toThrow(Error('Name is incorrect'));
});
