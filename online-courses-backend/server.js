// server.js

// ئەڭ ئالدى بىلەن dotenv نى قوزغىتىمىز — .env فايلىدىكى ئۆزگەرگۈچىلەرنى يۈكلەيدۇ
import dotenv from 'dotenv';
dotenv.config();

// باشقا import لار
import express from 'express';
import cors from 'cors';
import aiRoutes from './src/routes/ai.js';  // AI route (ئۇيغۇرچە چات)

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware لار
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// AI routes — frontend دىن /api/ai/chat غا كەلگەن ئىلتىماسلارنى بۇ يولغا يۆتكەيدۇ
app.use('/api/ai', aiRoutes);

// ئەگەر باشقا route لىرىڭىز بولسا، بۇ يەرگە قوشۇڭ، مەسىلەن:
// app.use('/api/courses', courseRoutes);
// app.use('/api/users', userRoutes);

// Server نى قوزغىتىش
app.listen(PORT, () => {
  console.log('🚀 Server ئۇيغۇرچە AI بىلەن بىرگە مۇۋەپپەقىيەتلىك ئىشقا كىرىشتى!');
  console.log(`🌐 ئادرېس: http://localhost:${PORT}`);
  console.log(`🤖 AI چات ئىشلىتىش ئۈچۈن: POST http://localhost:${PORT}/api/ai/chat`);
});