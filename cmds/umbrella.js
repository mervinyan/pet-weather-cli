const ora = require('ora');
const getWeather = require('../utils/weather');
const getProfile = require('../utils/profile');
const columnify = require('columnify');

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
    let data = [];
    data.push({
      'name': profile.name,
      'location': profile.location,
      'weather': weather.condition.text,
      'umbrella?': weather.condition.text.toLowerCase() === 'rainy' ? 'Yes' : 'No'
    });
    let columns = columnify(data);
    console.log(columns);    
 } catch (err) {
    spinner.stop();
    console.error(err.message);
  }
}
