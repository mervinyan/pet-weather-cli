const ora = require('ora');
const addPet = require('../utils/add');

module.exports = async(args) => {
  const spinner = ora().start();

  try {
    const data = args.data || args.d;
    if (!data) {
      throw new Error('Please provide pet info');
    }
    let pet = JSON.parse(data);

    if (!pet.name) {
      throw new Error('Please provide name.');
    }
    if (!pet.type) {
      throw new Error('Please provide type.');
    }
    if (!pet.breed) {
      throw new Error('Please provide breed.');
    }    
    if (!pet.location) {
      throw new Error('Please provide location.');
    }       
    const result = await addPet(pet.name, pet.type, pet.breed, pet.location);
    
    spinner.stop();
    console.log(result.message);
    console.log('pet id: ' + result.id);
  } catch (err) {
    spinner.stop();
    console.error(err.message);
  }
}
