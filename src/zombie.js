import Character from './character';

class Zombie extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, health, level);
    this.type = 'Zombie';
    this.attack = 40;
    this.defence = 10;
  }
}
