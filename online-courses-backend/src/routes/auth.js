const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


// Register
router.post('/register', async (req, res) => {
try {
const { name, email, password, role } = req.body;
let user = await User.findOne({ email });
if (user) return res.status(400).json({ message: 'Email already exists' });
const salt = await bcrypt.genSalt(10);
const hashed = await bcrypt.hash(password, salt);
user = new User({ name, email, password: hashed, role });
await user.save();
const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
} catch (err) { res.status(500).json({ message: err.message }); }
});


// Login
router.post('/login', async (req, res) => {
try {
const { email, password } = req.body;
const user = await User.findOne({ email });
if (!user) return res.status(400).json({ message: 'Invalid credentials' });
const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
} catch (err) { res.status(500).json({ message: err.message }); }
});


module.exports = router;





// MONGO_URI=mongodb+srv://kalbil-education:<db_password>@cluster0.3pzfbn6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// # JWT_SECRET=your_jwt_secret_key
// PORT=5000
// JWT_SECRET=kalbil_access_secret
// JWT_REFRESH_SECRET=kalbil_refresh_secret
// NODE_ENV=development


// CLOUDINARY_CLOUD_NAME=your_cloud_name
// CLOUDINARY_API_KEY=your_api_key
// CLOUDINARY_API_SECRET=your_api_secret
// CLIENT_URL=http://localhost:3000
// const openai = new OpenAI({
//  apiKey: process.env.OPENAI_API_KEY
//});


// PAYPAL_CLIENT_ID=AQ... (sandbox)
// PAYPAL_CLIENT_SECRET=EF... (sandbox)
// PAYPAL_ENV=sandbox

// # Frontend domains for CORS
// CLIENT_URL=http://localhost:3000,https://uydeveloper.github.io