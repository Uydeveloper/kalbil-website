import React, { useState } from 'react';
import MessageForm from './MessageForm';
import MessageCard from './MessageCard';

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);

  const handleAddMessage = (newMsg) => {
    setMessages((prev) => [newMsg, ...prev]);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">📝 خەۋەر يوللاش</h2>
      <MessageForm onSend={handleAddMessage} />
      <div className="mt-6 space-y-4">
        {messages.map((msg, i) => (
          <MessageCard key={i} message={msg} />
        ))}
      </div>
    </div>
  );
}