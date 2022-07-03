const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/trivia', {
  useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})

app.get('/api', (req, res) => {
  res.json({message: 'Hello!!'})
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})