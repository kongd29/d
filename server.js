const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

app.post('/upload', upload.single('photo'), (req, res) => {
  res.redirect('/');
});

app.get('/photos', (req, res) => {
  fs.readdir('public/uploads', (err, files) => {
    if (err) return res.json([]);
    res.json(files.filter(f => f.match(/\.(jpg|jpeg|png|gif)$/i)));
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
