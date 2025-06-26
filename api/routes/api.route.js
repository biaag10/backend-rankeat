import express from 'express';
import axios from 'axios';

const router = express.Router();

// Rota para buscar coordenadas do Google Maps
router.get('/geocode', async (req, res) => {
  const { cep } = req.query; // Recebe o CEP da requisição

  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=${process.env.GOOGLE_MAPS_API_KEY}`);
    
    if (response.data.status === 'OK' && response.data.results.length > 0) {
      const { lat, lng } = response.data.results[0].geometry.location;
      return res.json({ latitude: lat, longitude: lng });
    }

    return res.status(400).json({ error: 'Não foi possível encontrar as coordenadas para esse CEP.' });
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar as coordenadas', message: error.message });
  }
});

// Rota para buscar restaurantes usando a Foursquare API
router.get('/restaurants', async (req, res) => {
  const { latitude, longitude } = req.query; // Recebe as coordenadas (latitude e longitude) da requisição

  try {
    const response = await axios.get(`https://api.foursquare.com/v3/places/search?ll=${latitude},${longitude}&radius=5000&limit=20&categories=13065`, {
      headers: {
        Authorization: process.env.FSQ_API_KEY, // Usa a chave de API do Foursquare armazenada no .env
      }
    });

    return res.json(response.data); // Envia os dados de volta para o front-end
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar restaurantes', message: error.message });
  }
});

export default router;
