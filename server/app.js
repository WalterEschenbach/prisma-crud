const express = require('express');
const app = express();


const skillRouter = require('./routes/skill.router')

app.use(express.json());

app.get('/', function(request, response) {
  response.send("Hello World");
});

app.use('/skill', skillRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}` );
});