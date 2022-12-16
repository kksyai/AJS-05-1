import Character from '../character';

function Error(message) {
  this.message = message;
}

test(' lenght should be form 2 to 10', () => {
  const person = new Character('ivan', 'swordman', 50, 10);
  const expected = true;
  console.log(person.name.lenght);
  if ((person.name.lenght < 2) || (person.name.lenght > 10)) {
    const received = true;
    expect(received).toBe(expected);
    return;
  }
  throw new Error(`length ${person.name.lenght} is incorrect`);
});
