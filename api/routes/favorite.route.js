import express from 'express';
import * as favoriteController from '../controllers/favorite.controller.js';
import verifyToken from "../middlewares/jwt.token.middleware.js";  

const router = express.Router();

// Favoritos
router.post('/', verifyToken,  favoriteController.addFavorite);
router.delete('/:userId/:restaurantId', verifyToken, favoriteController.removeFavorite);
router.get('/:userId', verifyToken, favoriteController.getFavorites);

export default router;
