// src/components/Chat.jsx
import React, { useState } from 'react';
import "../styles/ChatbotPage.css";

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    { type: 'text', content: 'This is a sample big message with a longer text paragraph', sender: 'me', time: '10:30 AM' },
    { type: 'text', content: 'This is a sample big message with a longer text paragraph', sender: 'other', time: '10:30 AM' },
    { type: 'audio', content: '', sender: 'me', time: '10:30 AM' },
    { type: 'audio', content: '', sender: 'other', time: '10:30 AM' },
    { type: 'text', content: 'This is a sample message for a chat', sender: 'me', time: '10:30 AM' },
    { type: 'text', content: 'This is a sample message for a chat', sender: 'other', time: '10:30 AM' },
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    // Logic to send a message
  };

  return (
    <div className="chat-container">
      {/* Header */}
      <div className="chat-header">
        <button className="back-btn">←</button>
        <div className="user-info">
          <img src="user-avatar.jpg" alt="John Doe" className="avatar" />
          <div>
            <h4>John Doe</h4>
            <span className="status">Online</span>
          </div>
        </div>
        <button className="more-options">⋮</button>
      </div>

      {/* Chat Area */}
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.type === 'text' ? (
              <p>{msg.content}</p>
            ) : (
              <div className="audio-message">🔊 Audio message</div>
            )}
            <span className="time">{msg.time}</span>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="chat-input">
        <input type="text" placeholder="Message..." />
        <button className="send-btn">➤</button>
      </div>
    </div>
  );
};

export default ChatbotPage;
