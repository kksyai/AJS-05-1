export default class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }
}

// checkType(data) {
//   if (typeof this.data === 'string') {
//     console.log('data true');
//     return;
//   }
//   console.log(`error, name «${data}» - type unidefined`);
// }

// if ((data.length > 2) && (data.length < 10)) {
//   console.log(`${data} is correct`);
//   return;
// }
// console.log(`error, name «${data}» - length is incorrect`);
