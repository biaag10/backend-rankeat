import Comment from '../models/Comment.js';

export async function createComment(data) {
  return await Comment.create(data);
}

export async function getAllComments() {
  return await Comment.find().sort({ createdAt: -1 });
}

export async function updateComment(commentId, data) {
  return await Comment.findByIdAndUpdate(commentId, data, { new: true });
}

export async function deleteComment(commentId) {
  return await Comment.findByIdAndDelete(commentId);
}
