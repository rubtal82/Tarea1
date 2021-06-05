
// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

app.use(express.static('public'));
// our first Route:
// app.get('/', (request, response, next) => {
//   response.send('<h1>Bienvenidos a RT Brewing Co.</h1>');
// });

app.get('/', (request, response, next) => {
    
    response.sendFile(`${__dirname}/views/Home.html`);
  });

  app.get('/Historia', (request, response, next) => {
    
    response.sendFile(`${__dirname}/views/Historia.html`);
  });

  app.get('/Galeria', (request, response, next) => {
    
    response.sendFile(`${__dirname}/views/Galeria.html`);
  });
// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});
