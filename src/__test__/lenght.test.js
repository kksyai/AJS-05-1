import Character from '../character';

test(' lenght should be form 2 to 10', () => {
  const person = new Character('ivan', 'swordman', 50, 10);
  const expected = true;
  expect(person.checkLenght()).toBe(expected);
});
