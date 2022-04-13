// Write your solution here!
const pets = ['Milo','Otis','Garfield'];

const append = [...pets];
append.push('Odie');

const prepend = [...pets];
prepend.unshift('Odie');

const removeLast = [...pets];
removeLast.pop();

const removeFirst = [...pets];
removeFirst.shift();