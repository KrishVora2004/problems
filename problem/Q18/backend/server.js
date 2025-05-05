const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const songRoutes = require('./routes/songs');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/music', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/api/songs', songRoutes);

app.listen(3000, () => console.log('Server started on http://localhost:3000'));
