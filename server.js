const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/trivia', {
  useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});