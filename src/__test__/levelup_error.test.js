import Bowman from '../bowman';

test('throw levelUp error', () => {
  expect(() => {
    const person = new Bowman('oleg');
    person.health = 0;
    person.levelUp();
  }).toThrow(Error('нельзя повысить уровень жизни умершего'));
});
