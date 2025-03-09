import generateName from 'sillyname';
import superheroes from './superheroes.json' assert { type: 'json' };

// Gerar um nome aleatório do pacote 'sillyname'
const sillyName = generateName();
console.log(`My name is ${sillyName}`);

// Escolher um super-herói aleatório do JSON
const randomIndex = Math.floor(Math.random() * superheroes.length);
const heroName = superheroes[randomIndex];

console.log(`I am ${heroName}`);
