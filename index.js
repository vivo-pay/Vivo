// Minimal Express server – works with Firebase App Hosting
const express = require('express');
const app = express();

// ברירת-המחדל של App Hosting היא PORT=8080
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('✅ Vivo backend is running');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
