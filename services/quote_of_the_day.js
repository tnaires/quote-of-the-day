const axios = require('axios');

const QUOTE_OF_THE_DAY_API_PATH = 'https://quotes.rest/qod';

module.exports = {
  fetch: async () => {
    const headers = {
      'Accept': 'application/json'
    };
    const response = await axios.get(QUOTE_OF_THE_DAY_API_PATH, { headers });

    return new Promise(resolve =>{
      resolve(response.data.contents.quotes[0].quote);
    });
  }
};
