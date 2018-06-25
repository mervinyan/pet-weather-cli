const axios = require('axios');

module.exports = async () => {
  const response = await axios({
    method: 'get',
    url: 'https://secure-escarpment-53236.herokuapp.com/api/admin/types',
  });
  return response.data.types;
}
