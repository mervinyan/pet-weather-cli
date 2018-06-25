const ora = require('ora');
const getWeather = require('../utils/weather');
const getProfile = require('../utils/profile');

module.exports = async(args) => {
  const spinner = ora().start();

  try {
    const pet_id = args.pet || args.p;
    if (!pet_id) {
      throw new Error('Please provide pet_id.\npet-weather umbrella --pet (-p) pet_id');
    }
    const profile = await getProfile(pet_id);
    const weather = await getWeather(profile.location);
    
    spinner.stop();
    console.log(`Current conditions in ${profile.location} is ${weather.condition.text}, so your pet ${profile.name} ` + (weather.condition.text.toLowerCase() === 'rainy' ? 'is going to ' : 'does not ' + 'need an umbrella.'));
  } catch (err) {
    spinner.stop();
    console.error(err.message);
  }
}
