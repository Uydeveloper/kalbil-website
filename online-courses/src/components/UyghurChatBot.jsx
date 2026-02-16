// frontend/src/components/ChatBot.jsx
import { useState } from 'react';

export default function ChatBot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const res = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { text: data.reply, sender: 'bot' }]);
    } catch (err) {
      setMessages((prev) => [...prev, { 
        text: 'سەرۋېر باغلىنىشى خاتالىقى. Flask ئىشلىتىۋاتامدۇ؟', 
        sender: 'bot' 
      }]);
    }

    setInput('');
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-xl shadow-lg mt-6 border border-gray-200">
      <h2 className="text-xl font-bold text-center mb-4 text-gray-800">
        🤖 ئۇيغۇرچە AI سۆھبەتلىشىش ماشىنىسى
      </h2>
      
      <div 
        className="h-96 overflow-y-auto mb-4 p-3 bg-gray-50 rounded-lg"
        style={{ direction: 'auto' }}
      >
        {messages.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">
            سوئالىڭىزنى ئۇيغۇرچە يېزىڭ، مەن جاۋاب بېرىمەن!  
            مەسىلەن: «سۇنئي ئەقىل نېمە؟»
          </p>
        ) : (
          messages.map((msg, i) => (
            <div key={i} className={`mb-3 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block px-4 py-2 rounded-2xl ${
                msg.sender === 'user' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-green-100 text-gray-800'
              }`}>
                {msg.text}
              </span>
            </div>
          ))
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="سوئالىڭىزنى ئۇيغۇرچە يېزىڭ..."
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          dir="auto"
        />
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          يوللا
        </button>
      </form>
    </div>
  );
}