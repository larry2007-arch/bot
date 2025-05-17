const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/stats', (req, res) => {
  res.json({
    users: 3,
    messages: 3,
    notifications: 5
  });
});

app.get('/api/activity', (req, res) => {
  res.json({
    labels: ['Mon', 'Tue', 'Wed'],
    data: [30, 40, 50]
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});