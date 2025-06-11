import express from 'express';
import * as commentController from '../controllers/comment.controller.js';
import verifyToken from '../middlewares/jwt.token.middleware.js';

const router = express.Router();

// Rota para criar um comentário
router.post('/comments', verifyToken, commentController.createComment);

// Rota para obter todos os comentários
router.get('/comments', verifyToken, commentController.getAllComments);

// Rota para atualizar um comentário
router.patch('/comments/:id', verifyToken, commentController.updateComment);

// Rota para deletar um comentário
router.delete('/comments/:id', verifyToken, commentController.deleteComment);

export default router;
