// src/pages/MessagesPage.jsx
import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Socket.IO ئۇلانمىسى
const socket = io('http://localhost:5000');

export default function MessagesPage() {
  const { courseId } = useParams(); // URL دىن دەرىجى نومۇرىنى ئالىدۇ
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // دەرىجىگە قوشۇلۇش
  useEffect(() => {
    if (courseId) {
      socket.emit('joinCourse', courseId);
    }

    // ئۇچۇر قوبۇل قىلىش
    socket.on('newMessage', (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off('newMessage');
    };
  }, [courseId]);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const message = {
      text: input,
      user: 'سەن', // كېيىنكاردا AuthContext دىن ئىشلەتكۈچى ئىسمى ئالىنىدۇ
      time: new Date().toLocaleTimeString('ug'),
    };

    socket.emit('sendMessage', { courseId, message });
    setInput('');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Helmet>
        <title>ئۇچۇر — يۇقىرى پەن - تېخنىكا دەرسخانىسى</title>
      </Helmet>

      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        دەرىجە ئۇچۇرى: {courseId}
      </h1>

      {/* ئۇچۇر ئېكرانى */}
      <div className="bg-white rounded-lg shadow p-4 h-96 overflow-y-auto mb-4">
        {messages.length === 0 ? (
          <p className="text-gray-500">ھازىرچە ئۇچۇر يوق...</p>
        ) : (
          messages.map((msg, i) => (
            <div key={i} className="mb-2">
              <strong>{msg.user}</strong> ({msg.time}): {msg.text}
            </div>
          ))
        )}
      </div>

      {/* ئۇچۇر كىرگۈزۈش */}
      <form onSubmit={handleSend} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="ئۇچۇر يېزىڭ..."
          className="flex-1 border rounded px-3 py-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          يوللا
        </button>
      </form>
    </div>
  );
}