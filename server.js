require('dotenv').config();

const express = require('express');
const ProjectsController = require('./controllers/projects');
const TestController = require('./controllers/test');

const CONTEXT = '/quote-of-the-day';
const PORT = process.env.PORT || 3000;

const app = express();

app.post(`${CONTEXT}${ProjectsController.PATH}`, ProjectsController.newProject);
app.get(`${CONTEXT}${TestController.PATH}`, TestController.load);

app.listen(PORT, () => {
  console.log(`quote-of-the-day app listening on port ${PORT}`);
});
