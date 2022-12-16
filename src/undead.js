import Character from './character';

class Undead extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, health, level);
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}
