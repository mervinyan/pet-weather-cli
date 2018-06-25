const ora = require('ora');
const getPets = require('../utils/pet');
const getTypes = require('../utils/type');
const getBreeds = require('../utils/breed');
const columnify = require('columnify');

module.exports = async (args) => {
  const spinner = ora().start();

  try {
    const kind = args.kind || args.k || 'pet';
    let data = [];
    if (kind && kind.toLowerCase() === 'pet') {
      const pets = await getPets();
      pets.forEach(pet => data.push({
        "id": pet._id,
        "name": pet.name,
        "type": pet.type.name,
        "breed": pet.breed.name
      }));
    }

    if (kind && kind.toLowerCase() === 'type') {
      const types = await getTypes();
      types.forEach(type => data.push({
        "id": type._id,
        "name": type.name
      }));
    }    

    if (kind && kind.toLowerCase() === 'breed') {
      const breeds = await getBreeds();
      breeds.forEach(breed => data.push({
        "id": breed._id,
        "name": breed.name,
        "type": breed.type.name
      }));
    }    

    let columns = columnify(data);
    console.log(columns);

    spinner.stop();

  } catch (err) {
    spinner.stop();

    console.error(err);
  }
}
