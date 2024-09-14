import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/HomePage.css";
import ggg from "../icons/google.png"


const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Fruit.Ai</h1>
      <p className="tagline">"Be Healthy!"</p>
      <div className="button-grid">
        <button className="button chat" onClick={() => navigate('/chatbot')}>Chatbot</button>
        <button className="button translate" ></button>
        <button className="button translate" ></button>
        <button className="button translate" onClick={() => navigate('/translator')}><img src={ggg} style={{ width: '50px', height: '50px' }} /></button>
        <button className="button faqs" onClick={() => navigate('/faq')}>FAQs</button>
        <button className="button about" onClick={() => navigate('/about')}>About</button>
      </div>
    </div>
    
  );
};

export default HomePage;
//////////////////////////////////////////////////////////////////////////////////////////////
// const HomePage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="home-container">
//       <h1>Welcome to Fruit.ai</h1>
//       <div className="services">
//         <button onClick={() => navigate('/chatbot')}>Chatbot</button>
//         <button onClick={() => navigate('/translator')}>Translator</button>
//         <button onClick={() => navigate('/faq')}>FAQs</button>
//         <button onClick={() => navigate('/about')}>About</button>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React from 'react';


// const App = () => {
//   return (
//     <div className="container">
//       <h1>Fruit.Ai</h1>
//       <p className="tagline">"Be Healthy!"</p>
//       <div className="button-grid">
//         <div className="button chat">Chat</div>
//         <div className="button translate">Translate</div>
//         <div className="button faqs">FAQs</div>
//         <div className="button about">About</div>
//       </div>
//     </div>
//   );
// };

// export default App;
