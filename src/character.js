export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = unintended;
  }

  checkLenght() {
    if ((this.name.length < 2) || (this.name.length > 10)) {
      throw new Error('length is incorrect');
    }
    return true;
  }
}

// const person = new Character('ivanvhgjhghnbckh', 'bowman', 100, 2, 40, 30);
// console.log(person.checkLenght());
