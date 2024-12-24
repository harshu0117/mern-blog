import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validate fields
        if (!username || !email || !password || username.trim() === '' || email.trim() === '' || password.trim() === '') {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email is already in use' });
        }
        // hashing the password
        const hashedPassword = bcryptjs.hashSync(password,10);
        // Save the user
        const newUser = new User({ username, email, password : hashedPassword});
        await newUser.save();

        res.status(201).json({ message: 'User created successfully!' });
    } catch (error) {
        console.error('Error handling signup:', error);
        res.status(500).json({ error: 'Something went wrong!' });
    }
};
