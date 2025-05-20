import express from 'express';
import * as searchHistoryController from '../controllers/searchHistory.controller.js';
import * as favoriteController from '../controllers/favorite.controller.js';

const router = express.Router();

// Histórico de buscas
router.post('/search-history', searchHistoryController.createSearchHistory);
router.get('/search-history', searchHistoryController.getRecentSearches);

// Favoritos
router.post('/favorites', favoriteController.addFavorite);
router.delete('/favorites/:userId/:restaurantId', favoriteController.removeFavorite);
router.get('/favorites/:userId', favoriteController.getFavorites);

export default router;
