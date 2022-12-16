import Character from '../character';

test('should be string', () => {
  const expected = 'string';
  const received = new Character('ivan', 'swordman', 50, 10);
  expect(typeof received.name).toBe(typeof expected);
});
