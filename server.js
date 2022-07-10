const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes')
const dbURI = process.env.MONGODB_URI;
require('dotenv')

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use(routes);

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});