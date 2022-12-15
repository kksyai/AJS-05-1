// import Character from '../class_Character.js';

test('should add two numbers', () => {
  const received = 1 + 1;
  const expected = 2;
  expect(received).toBe(expected);
});

// test('should be string', () => {
//   const person = {
//     name: 'ivan', type: 'swordman', health: 50, level: 10,
//   };
//   const expected = 'string';
//   const received = new Character(person);
//   expect(received).toBe(expected);
// });

// checkType(data) {
//   if (typeof this.data === 'string') {
//     expect(received).toBe(expected);
//     console.log('data true');
//   }
//   console.log(`error, name «${data}» - type unidefined`);
// }

// checkType(data) {
//     if ((data.length > 2) && (data.length < 10)) {
//       console.log(`${data} is correct`);
//       expect(received).toBe(expected);
//       return;
//     }
//     console.log(`error, name «${data}» - length is incorrect`);
// }
