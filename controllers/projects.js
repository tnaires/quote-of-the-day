const QuoteOfTheDayService = require('../services/quote_of_the_day');

module.exports = {
  newProject: (req, res) => {
    QuoteOfTheDayService
      .fetch()
      .then(quote => res.status(201).send(quote));
  },

  PATH: '/project/new'
};
