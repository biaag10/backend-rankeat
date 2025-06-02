import * as commentService from '../services/comment.service.js';

export async function createComment(req, res) {
  try {
    const { restaurantId, comment } = req.body;
    const userId = req.userId;

    if (!restaurantId || !comment) {
      return res.status(400).json({ message: 'restaurantId e comment são obrigatórios.' });
    }

    const newComment = await commentService.createComment({ restaurantId, userId, comment });
    res.status(201).json({
      message: 'Comentário criado com sucesso.',
      comment: newComment,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Erro ao criar comentário.',
      error: error.message,
    });
  }
}

export async function getAllComments(req, res) {
  try {
    const comments = await commentService.getAllComments();
    res.status(200).json({
      message: 'Lista de comentários carregada com sucesso.',
      comments,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao carregar comentários.',
      error: error.message,
    });
  }
}

export async function updateComment(req, res) {
  try {
    const { id } = req.params;
    const { comment } = req.body;

    if (!comment) {
      return res.status(400).json({ message: 'O campo comment é obrigatório para atualização.' });
    }

    const updated = await commentService.updateComment(id, { comment });

    if (!updated) {
      return res.status(404).json({ message: 'Comentário não encontrado.' });
    }

    res.status(200).json({
      message: 'Comentário atualizado com sucesso.',
      comment: updated,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Erro ao atualizar comentário.',
      error: error.message,
    });
  }
}

export async function deleteComment(req, res) {
  try {
    const { id } = req.params;

    const deleted = await commentService.deleteComment(id);

    if (!deleted) {
      return res.status(404).json({ message: 'Comentário não encontrado para exclusão.' });
    }

    res.status(200).json({
      message: 'Comentário deletado com sucesso.',
    });
  } catch (error) {
    res.status(400).json({
      message: 'Erro ao deletar comentário.',
      error: error.message,
    });
  }
}
