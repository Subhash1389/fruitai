import React, { useState } from 'react';
import "../styles/TranslatorPage.css";

const TranslatorPage = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    // Dummy translation functionality
    setTranslatedText(`Translated: ${text}`);
  };

  return (
    <div className="translator-container">
      <h1>Translator</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={handleTranslate}>Translate</button>
      <p>{translatedText}</p>
    </div>
  );
};

export default TranslatorPage;
