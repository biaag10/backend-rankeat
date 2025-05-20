import * as searchHistoryService from '../services/search-history.service.js';

export async function createSearchHistory(req, res) {
  try {
    const { cep, latitude, longitude } = req.body;
    const userId = req.userId;  // Obtendo o userId do token JWT
    const result = await searchHistoryService.saveSearch({
      cep,
      latitude,
      longitude,
      userId,  // Associando o histórico ao usuário
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getRecentSearches(req, res) {
  console.log("Token validado, buscando históricos...");
  try {
    const limit = parseInt(req.query.limit) || 10;
    const userId = req.userId;  // Obtendo o userId do token JWT
    const results = await searchHistoryService.getRecentSearches(limit);
    if (results.length === 0) {
      return res.status(200).json({ message: "Nenhum histórico encontrado." });
    }
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
