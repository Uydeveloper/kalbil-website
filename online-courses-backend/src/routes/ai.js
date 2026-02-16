// src/routes/ai.js — تولۇق ۋە توغرا نەشرى (openai ^6.15.0 غا ماس)

import express from 'express';
import { OpenAI } from 'openai';  // ← توغرا import (يېڭى نەشرىگە ماس)

const router = express.Router();

// OpenAI كلاسسىنى ياراتمىز
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY  // .env دىن ئوقۇيدۇ
});

router.post('/chat', async (req, res) => {
  const { message, context = [] } = req.body;

  if (!message || message.trim() === '') {
    return res.status(400).json({ error: 'ئۇچۇر بوش بولسا بولمايدۇ' });
  }

  try {
    // سىستېما كۆرسەتمىسى — ھەمىشە ئۇيغۇرچە جاۋاب بېرىشكە مەجبۇرلايدۇ
    const messages = [
      {
        role: 'system',
        content: 'سىز ئۇيغۇر تىلىدىكى دوستانە، ئەقىللىق ۋە ياردەمچى AI سىز. ھەمىشە پەقەت ئۇيغۇرچە جاۋاب بېرىڭ، قىسقا ۋە چۈشىنىشلىك بولۇڭ.',
      },
      ...context.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      })),
      { role: 'user', content: message }
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',  // ئەرزان، تېز، ئۇيغۇرچىنى ياخشى بىلىدۇ
      messages,
      temperature: 0.7,
      max_tokens: 1000,
    });

    const response = completion.choices[0].message.content?.trim() || 'جاۋاب يوق';

    res.json({ response });
  } catch (error) {
    console.error('OpenAI خاتالىقى:', error.message);

    const fallbacks = [
      'كەچۈرۈڭ، ھازىر جاۋاب بېرىشىم قىيىن بولۇۋاتىدۇ. قايتا سىناپ بېقىڭ.',
      'تور ئۇلىنىشىدا مەسىلە بارغا ئوخشايدۇ. بىر ئازدىن كېيىن قايتا سىناڭ.',
      'مەن بۇ سوئالغا ھازىر جاۋاب بېرەلمەيمەن، باشقا سوئال سوراپ بېقىڭ.'
    ];

    const fallback = fallbacks[Math.floor(Math.random() * fallbacks.length)];
    res.json({ response: fallback });
  }
});

export default router;