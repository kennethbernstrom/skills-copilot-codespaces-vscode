// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create comments array
const comments = [
  { username: 'Tammy', comment: 'lololol' },
  { username: 'Mike', comment: 'lmao' },
  { username: 'Sandy', comment: 'rofl' },
  { username: 'Tommy', comment: 'lmfao' }
];

// GET route to retrieve all comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// POST route to add a comment
app.post('/comments', (req, res) => {
  const username = req.query.username;
  const comment = req.query.comment;
  comments.push({ username: username, comment: comment });
  res.send('Comment added!');
});

// Start server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});