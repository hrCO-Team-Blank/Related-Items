const express = require('express');
const app = express();
const PORT = 3001;
const path = require('path')

app.use(express.static('../client/dist')); // Host your dist folder up to the server
app.use(express.json()); // Alternative to BodyParser

// If you had to handle requests on the server side, this is where that would occur
// app.get('/products/:id', (req, res) => {
//   // Handle the request
//   // -- Could make DB queries here
//   // Send back O-K
//   res.status(200).send('The server is taking requests to the products/:id endpoint');
// });

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});
// Listening for requests on the PORT
app.listen(PORT, () => {
  console.log('Serving up now at ' + JSON.stringify(PORT))
});