const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes')

mongoose.connect('mongodb://localhost:27017/trivia', {
  useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use('/', routes);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});