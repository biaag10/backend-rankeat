import express from 'express';
import * as searchHistoryController from '../controllers/search-history.controller.js';
import verifyToken from "../middlewares/jwt.token.middleware.js";  

const router = express.Router();

// Histórico de buscas
router.post('/search-history', verifyToken, searchHistoryController.createSearchHistory);
router.get('/search-history', verifyToken, searchHistoryController.getRecentSearches);

export default router;
