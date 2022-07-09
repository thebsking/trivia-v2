const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes')

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use(routes);

mongoose.connect('mongodb://localhost/trivia', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});