import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createComment, getPostComments, likeComment } from '../controllers/commentController.js';
import { getUser } from '../controllers/userController.js';

const router=express.Router();

router.post('/create',verifyToken,createComment);
router.get('/getPostComments/:postId',getPostComments);
router.put('/likeComment/:commentId',verifyToken,likeComment)



export default router