const axios = require('axios');

module.exports = async (name, type, breed, location) => {
  const response = await axios.post('https://secure-escarpment-53236.herokuapp.com/api/pets',
    {
      "name": name,
      "type": type,
      "breed": breed,
      "location": location
    });
  return response.data;
}
