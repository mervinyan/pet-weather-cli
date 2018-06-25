const ora = require('ora');
const addPet = require('../utils/add');

module.exports = async(args) => {
  const spinner = ora().start();

  try {
    const name = args.name || args.n;
    if (!name) {
      throw new Error('Please provide name.');
    }
    const type = args.type || args.t;
    if (!type) {
      throw new Error('Please provide type.');
    }
    const breed = args.breed || args.b;
    if (!breed) {
      throw new Error('Please provide breed.');
    }    
    const location = args.location || args.l;
    if (!location) {
      throw new Error('Please provide location.');
    }       
    const result = await addPet(name, type, breed, location);
    
    spinner.stop();
    console.log(result.message);
    console.log('pet id: ' + result.id);
  } catch (err) {
    spinner.stop();
    console.error(err.message);
  }
}
