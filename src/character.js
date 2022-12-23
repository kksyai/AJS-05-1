export default class Character {
  constructor(name, type) {
    function checkName() {
      if ((name.length < 2) || (name.length > 10) || (typeof (name) !== 'string')) {
        throw new Error('Name is incorrect');
      }
      return name;
    }

    function checkType() {
      const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      if (!types.includes(type)) {
        throw new Error('Type is incorrect');
      }
      return type;
    }

    this.name = checkName();
    this.type = checkType();

    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}

// this.name = checkName();
// const person = new Character('ivanvhgjhghnbckh', 'bowman', 100, 2, 40, 30);
// console.log(person.checkLenght());
