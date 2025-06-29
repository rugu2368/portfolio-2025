const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'new.html'));
});

app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});
