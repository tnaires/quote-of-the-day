const path = require('path');

module.exports = {
  load: (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/test.html'));
  },

  PATH: '/test'
};
