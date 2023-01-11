import Bowman from '../bowman';

test('levelUp test', () => {
  const person = new Bowman('ivan');

  const expected = {
    name: 'ivan',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };

  expect(person.levelUp()).toEqual(expected);
});
