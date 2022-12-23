// import Character from '../character';
import Bowman from '../bowman';

test('create test', () => {
  const person = new Bowman('ivan', 'Bowman');

  const expected = {
    name: 'ivan',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(person).toEqual(expected);
});
