/* contollers to handel user requests backend processes */
const User = require('../models/user.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const cookie = require('cookie');

/* controller to perform backend procees to handel user registration */
const registerUser = async (req, resp) => {
    try {
        const { fullName, userName, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return resp.status(400).json({ message: 'User with this email already exists' });
        }
        const user = new User({ fullName, userName, email, password });
        await user.save();
        resp.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.warn(error);
        resp.status(500).json({ message: 'Internal server error' });
    }
}

/* controller to perform backend procees to handel user login */
const login = async (req, resp) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return resp.status(401).json({ message: 'Invalid credentials' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return resp.status(401).json({ message: 'Invalid credentials' });
        }
        // Generate JWT token
        const token = jwt.sign({ userId: user._id , username: user.userName , fullname: user.fullName }, process.env.SECRET_KET);
        // Set the token as a cookie
        resp.setHeader('Set-Cookie', cookie.serialize('token', token, {
            httpOnly: true,
            maxAge: 60 * 60, // 1 hour (in seconds)
            sameSite: 'strict',
            path: '/',
        }));
        resp.status(200).json( {Token: token , userid:user._id ,message: 'Login successful'});

    } catch (error) {
        console.error(error);
        resp.status(500).json({ message: 'Internal server error' });
    }
};

/* controller to perform backend procees to handel user logout */
const logout = (req, res) => {
    // Clear the token cookie
    res.setHeader('Set-Cookie', cookie.serialize('token', '', {
        httpOnly: true,
        expires: new Date(0), // Set to an expired date
        sameSite:'None',
        secure: true,
        
    }));

    res.status(200).json({ message: 'Logout successful' });
};

/* controller to perform backend procees to handel user info  */

const userdetails = async(req,resp)=>{
    const _id=req.params.id;
    const user = await User.findOne({ _id });
    if (!user) {
        return resp.status(401).json({ message: 'Invalid credentials' });
    }

    resp.status(200).json({fullname:user.fullName , username:user.userName , email:user.email});

};


module.exports = {
    registerUser,
    login,
    logout,
    userdetails,
}