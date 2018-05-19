const QuoteOfTheDayService = require('../services/quote_of_the_day');
const VoiceBunny = require('../services/voicebunny');

const MY_NAME = 'Tarso';

const errorHandler = (msg, error, res) => {
  console.log(`ERROR ${msg}:`);
  console.log(error);

  res.status(500).send(error);
}

module.exports = {
  newProject: (req, res) => {
    QuoteOfTheDayService
      .fetch()
      .then(quote => {
        const projectTitle = `[${MY_NAME}] - Job Application for Bunny Inc.`;

        VoiceBunny
          .createBookingProject(projectTitle, quote)
          .then(project => {
            res.status(201).send(project);
          })
          .catch(error => {
            errorHandler('creating booking project', error, res);
          });
      })
      .catch(error => {
        errorHandler('fetching quote of the day', error, res);
      });
  },

  PATH: '/project/new'
};
