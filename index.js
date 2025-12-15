require('dotenv').config({ path: '../config/.env' }); // loads John’s API key
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('THE_TRINITY_COLLECTIVE API is live!');
});

// Example endpoint for testing API integration
app.get('/api/test', (req, res) => {
  res.json({ status: 'ok', message: 'API endpoint working' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

