import Character from './class_Character.js';

class Bowman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, health, level);
    this.type = 'Bowman';
    this.attack = 25;
    this.defence = 25;
  }
}
