const axios = require('axios');

module.exports = async (id) => {
  const response = await axios({
    method: 'get',
    url: 'https://secure-escarpment-53236.herokuapp.com/api/pets/'+id,
  });
  return response.data;
}