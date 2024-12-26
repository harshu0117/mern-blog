import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from '../api/routes/user.route.js'
import authRoutes from '../api/routes/auth.route.js'
import cors from 'cors';
// import cors from 'cors';  // Import CORS



dotenv.config();

mongoose
  .connect(process.env.MONGO, {
  })
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((err) => {
    console.error(process.env.MONGO, err.message);
  });



const app = express();
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));


// Middleware to parse JSON requests
app.use(express.json());
// Enable CORS for all origins or specific origins
// app.use(cors({
//     origin: 'http://localhost:5173',  // Allow only the frontend running on localhost:5173
//     methods: ['GET', 'POST'],  // Allow only GET and POST methods
//     allowedHeaders: ['Content-Type'],  // Allow only Content-Type header
// }));




app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);


// Global Error-Handling Middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500; // Default to 500 if not set
    const message = err.message || 'Internal Server Error';
    console.error(`Error: ${message}`); // Log the error for debugging
    res.status(statusCode).json({ error: message });
});
