const axios = require('axios');

const QUOTE_OF_THE_DAY_API_PATH = 'https://talaikis.com/api/quotes/random/';

module.exports = {
  fetch: async () => {
    const headers = {
      'Accept': 'application/json'
    };

    try {
      const response = await axios.get(QUOTE_OF_THE_DAY_API_PATH, { headers });

      return new Promise(resolve => {
        resolve(response.data.quote);
      });
    } catch (error) {
      return new Promise((resolve, reject) =>{
        reject(error);
      });
    }
  }
};
