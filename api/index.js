import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from '../api/routes/user.route.js'
import authRoutes from '../api/routes/auth.route.js'

dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('MongDB is connected');
}).catch((err)=>{
    console.log(err);
});


const app = express();

// Middleware to parse JSON requests
app.use(express.json());



app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'An unexpected error occurred';
    res.status(statusCode).json({ error: message });
});
