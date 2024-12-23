import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res , next) => {
    try {
        const { username, email, password } = req.body;

        // Validate fields
        if (!username || !email || !password || username.trim() === '' || email.trim() === '' || password.trim() === '') {
            next(errorHandler(400,'All fields are requireds'))
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            // return res.status(400).json({ message: 'Email is already in use' });
            next(errorHandler(400,'Email is already in use'));
        }
        // hashing the password
        const hashedPassword = bcryptjs.hashSync(password,10);
        // Save the user
        const newUser = new User({ username, email, password : hashedPassword});
        await newUser.save();

        res.status(201).json({ message: 'User created successfully!' });
    } catch (error) {
        next(error);
        console.error('Error handling signup:', error);
        // res.status(500).json({ error: 'Something went wrong!' });
    }
};
