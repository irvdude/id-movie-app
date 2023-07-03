const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3001;

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'build')));

// Proxy request to external API
app.get('/api/movies', async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://imdb-top-100-movies1.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': '47c87649d8msh5964d8423d9fed5p1f3fd5jsn74ff8a11a226',
      'X-RapidAPI-Host': 'imdb-top-100-movies1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data from the external API' });
  }
});

// Handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
