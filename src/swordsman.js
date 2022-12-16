import Character from './character';

class Swordsman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, health, level);
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}
