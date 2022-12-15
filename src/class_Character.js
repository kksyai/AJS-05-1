export default class Character {
  constructor(name, type, health, level) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  checkType(data) {
    if (typeof this.data === 'string') {
      console.log('data true');
      if ((data.length > 2) && (data.length < 10)) {
        console.log(`${data} is correct`);
        return;
      }
      console.log(`error, name «${data}» - length is incorrect`);
      return;
    }
    console.log(`error, name «${data}» - type unidefined`);
  }
}
