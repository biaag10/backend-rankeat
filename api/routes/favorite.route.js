import express from 'express';
import * as favoriteController from '../controllers/favorite.controller.js';
import verifyToken from "../middlewares/jwt.token.middleware.js";  

const router = express.Router();

// Favoritos
router.post('/favorites', verifyToken,  favoriteController.addFavorite);
router.delete('/favorites/:userId/:restaurantId', verifyToken, favoriteController.removeFavorite);
router.get('/favorites/:userId', verifyToken, favoriteController.getFavorites);

export default router;
