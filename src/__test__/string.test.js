import Character from '../character';

test('should be string', () => {
  const expected = 'ivan';
  const received = new Character('ivan', 'swordman', 50, 10);
  expect(received.name).toBe(expected);
});
