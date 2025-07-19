const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('VIVO backend is running!');
});

app.listen(PORT, () => {
  console.log(Server is listening on port ${PORT});
});
