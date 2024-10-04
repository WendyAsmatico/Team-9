const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const OLLAMA_API_URL = 'http://localhost:11434/api/generate';

app.post('/chat', async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await axios.post(OLLAMA_API_URL, {
      model: "biodiversity-climate",
      prompt: prompt,
      stream: false
    });
    res.json({ reply: response.data.response });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Une erreur est survenue.' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});