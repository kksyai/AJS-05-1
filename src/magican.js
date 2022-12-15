import Character from './class_Character.js';

class Magician extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, health, level);
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}