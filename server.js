const express = require('express');

const CONTEXT = '/voicebunny/api';
const PORT = process.env.PORT || 3000;

const app = express();

app.get(CONTEXT, (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`VoiceBunny app listening on port ${PORT}`);
});
