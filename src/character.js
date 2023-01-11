export default class Character {
  constructor(name, type) {
    function checkName(charName) {
      if ((charName.length < 2) || (charName.length > 10) || (typeof (charName) !== 'string')) {
        throw new Error('Name is incorrect');
      }
      return charName;
    }

    function checkType(charType) {
      const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      if (!types.includes(charType)) {
        throw new Error('Type is incorrect');
      }
      return charType;
    }

    this.name = checkName(name);
    this.type = checkType(type);

    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
      return this;
    }
    throw new Error('нельзя повысить уровень жизни умершего');
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    return this.health;
  }
}
