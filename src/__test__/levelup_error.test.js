import Bowman from '../bowman';

test('throw levelUp error', () => {
  const person = new Bowman('oleg');
  person.health = 0;
  expect(person.levelUp()).toThrow(Error('нельзя повысить уровень жизни умершего'));
});
