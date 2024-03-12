const fs = require('fs');

const createPerson = (person) => {
	const data = JSON.stringify(person);
	fs.writeFileSync('./data/person.json', data);
	return person;
};

const sabrina = createPerson({
	name: 'Sabrina',
	age: 22,
	address: 'BSD',
});

console.log(sabrina);
