import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';
import JWT_SECRET from 'dotenv';

export const signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        // Validate fields
        if (!username || !email || !password || username.trim() === '' || email.trim() === '' || password.trim() === '') {
            return next(errorHandler(400, 'All fields are required'));
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return next(errorHandler(400, 'Email is already in use'));
        }

        // Hash the password
        const hashedPassword = bcryptjs.hashSync(password, 10);

        // Save the user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({ message: 'User created successfully!' });
    } catch (error) {
        console.error('Error handling signup:', error);
        next(error); // Passes the error to the error-handling middleware
    }
};

export const signin = async (req,res,next)=>{
    const { email, password } = req.body;

    // Validate fields
    if (!email || !password || email=== '' || password=== '') {
        return next(errorHandler(400, 'All fields are required'));
    }

    try {
        const validUser = await User.findOne({email});
        if(!validUser){
            return next(errorHandler(404,'User not found'));
        }
        const validPassword = bcryptjs.compareSync(password,validUser.password);
        if(!validPassword){
            return next(errorHandler(404,'Invalid Password'));
        }
        
        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET);
        
        const {password:pass, ...rest} = validUser._doc;

        res.status(200).cookie('access_token',token,{
            httpOnly:true,
        }).json(rest);
    } catch (error) {
        next(error)
    }

};
