const express = require('express');
const app = express();

app.use(express.static('.'));

app.get('/', function(request, response) {
  response.send("Hello World");
});

const PORT = process.env.PORT || 8080;

const listener = app.listen(PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});