//HW-14_1

function getPersonsCity(persons, city) {
    return persons.filter(n => n.address.city == city);
}

//test
// input: 
const persons = [
    createPerson(123, "Vasya", createAddress("Rehovot", "Parshani")),
    createPerson(124, "Olya", createAddress("Rehovot", "Pr. Plaut")),
    createPerson(125, "Tolya", createAddress("Tel-Aviv", "Dizengoff")),
    createPerson(126, "Sara", createAddress('Lod', 'Sokolov'))
];

//output:
const residentsRehovot = getPersonsCity(persons, 'Rehovot');
console.log(getPersonsCity(persons, 'Rehovot'));

//factory functions:
function createAddress(city, street) {
    return {city, street};
}
function createPerson(id, name, address) {
    return {id, name, address};
}