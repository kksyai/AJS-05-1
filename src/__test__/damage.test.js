import Bowman from '../bowman';

test('damage test', () => {
  const person = new Bowman('ivan');

  const expected = 77.5;

  expect(person.damage(30)).toEqual(expected);
});
