const countries = require('./data');

function filter(pattern, count) {
    return countries.data.reduce((countryAccumulator, country) => reduceCountry(countryAccumulator, country, {
        pattern,
        count
    }), [])
}

function reduceCountry(countryAccumulator, country, options) {
    const people = country.people.reduce((personAccumulator, person) => reducePerson(personAccumulator, person, options), []);

    if (people.length) {
        countryAccumulator.push({
            ...country,
            people,
            name: options.count ? `${country.name} [${people.length}]` : country.name
        });
    }

    return countryAccumulator;
}

function reducePerson(personAccumulator, person, options) {
    const animals = person.animals.filter(animal => filterAnimal(animal, options.pattern));

    if (animals.length) {
        personAccumulator.push({
            ...person,
            animals,
            name: options.count ? `${person.name} [${animals.length}]` : person.name
        });
    }

    return personAccumulator;
}

function filterAnimal(animal, pattern) {
    return !pattern || animal.name.toLowerCase().includes(pattern.toLowerCase());
}

module.exports = {filter}
