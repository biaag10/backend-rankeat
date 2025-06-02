import express from 'express';
import * as commentController from '../controllers/comment.controller.js';
import verifyToken from '../middlewares/jwt.token.middleware.js';

const router = express.Router();

router.post('/create', verifyToken, commentController.createComment);
router.get('/get', verifyToken, commentController.getAllComments);
router.patch('/update/:id', verifyToken, commentController.updateComment);
router.delete('/delete/:id', verifyToken, commentController.deleteComment);

export default router;
