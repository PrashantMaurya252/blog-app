import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoute.js';
import authRoutes from './routes/authRoute.js';
import cookieParser from 'cookie-parser';
import postRoutes from './routes/postRoute.js';
import commentRoutes from './routes/commentRoute.js';
import path from "path";
dotenv.config();


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Connected to Database')
}).catch((err)=>{
    console.log(err)
});

const __dirname=path.resolve();

const app=express();
app.use(express.json());
app.use(cookieParser());


app.listen(4000,()=>{
    console.log('Server is running on port 4000')
})

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/post',postRoutes);
app.use('/api/comment',commentRoutes);

app.use(express.static(path.join(__dirname,'/client/dist')));
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','dist','index.html'))
})

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})

