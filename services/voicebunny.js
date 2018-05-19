const axios = require('axios');

const VOICE_BUNNY_USER_ID = process.env.VOICE_BUNNY_USER_ID;
const VOICE_BUNNY_API_TOKEN = process.env.VOICE_BUNNY_API_TOKEN;
const CREATE_BOOKING_PROJECT_PATH = `https://${VOICE_BUNNY_USER_ID}:${VOICE_BUNNY_API_TOKEN}@api.voicebunny.com/projects/addBooking`;
const TALENT_ID = '81SQO';

module.exports = {
  createBookingProject: async (title, script) => {
    const projectData = {
      title,
      script,
      talentID: TALENT_ID,
      test: "1"
    };
    const headers = { 'Content-Type': 'application/json' };

    try {
      const response = await axios.post(CREATE_BOOKING_PROJECT_PATH, projectData, { headers });

      return new Promise(resolve => {
        resolve(response.data);
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
};
