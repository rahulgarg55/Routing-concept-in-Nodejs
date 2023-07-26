
const express = require('express');

const app = express();
const port = 3004; 

app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page!');
});

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`You are viewing user with ID: ${userId}`);
});

app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
