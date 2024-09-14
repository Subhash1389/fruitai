import React, { useState } from 'react';
import "../styles/FaqPage.css";

const FAQCard = ({ image, title, description, onDelete }) => {
  return (
    <div className="faq-card">
      <div className="faq-image">
        <img src={image} alt={title} />
      </div>
      <div className="faq-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={onDelete} className="delete-button" style={{alignItems:"end"}}>Delete</button>
      </div>
    </div>
  );
};

const FaqPage = () => {
  const [faqs, setFaqs] = useState([
    {
      image: '/tangerine.jpg',
      title: 'How is Tangerine healthy?',
      description:
        'Tangerines are a great health booster due to their high vitamin C content, which supports the immune system and skin health.',
    },
    // Add more FAQ objects as needed
  ]);

  const [newFAQ, setNewFAQ] = useState({
    image: '',
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFAQ({
      ...newFAQ,
      [name]: value,
    });
  };

  const addFAQ = () => {
    setFaqs([...faqs, newFAQ]);
    setNewFAQ({ image: '', title: '', description: '' });
  };

  const deleteFAQ = (index) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">FAQ Section</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <FAQCard
            key={index}
            image={faq.image}
            title={faq.title}
            description={faq.description}
            onDelete={() => deleteFAQ(index)}
          />
        ))}
      </div>

      <div className="faq-form">
        <h3>Add New FAQ</h3>
        <input
          type="text"
          name="image"
          value={newFAQ.image}
          onChange={handleChange}
          placeholder="Image URL"
        />
        <input
          type="text"
          name="title"
          value={newFAQ.title}
          onChange={handleChange}
          placeholder="Question"
        />
        <input
          type="text"
          name="description"
          value={newFAQ.description}
          onChange={handleChange}
          placeholder="Answer"
        />
        <button onClick={addFAQ} >Add FAQ</button>
      </div>
    </div>
  );
};

export default FaqPage;
