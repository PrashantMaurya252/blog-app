import Comment from "../model/commentModal.js";
import { errorHandler } from "../utils/error.js";

export const createComment=async(req,res,next)=>{
    try {
        const {content,postId,userId}=req.body;
        if(userId !==req.user.id){
            next(errorHandler(403,'You are Not Allowed to Create Comment'))
        }

        const newComment=new Comment({
            content,postId,userId
        });

        await newComment.save();
        res.status(200).json(newComment)
    } catch (error) {
        next(error)
    }
}