import Character from '../character';

test('throw error', () => {
  const person = new Character('ivanivanivan', 'bowman', 100, 2, 40, 30);
  expect(person.checkLenght()).toThrow(Error('length is incorrect'));
});
