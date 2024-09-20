import React, { useState } from 'react';
import './Homepage.css';

const InputForm = () => {
  const [input, setInput] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState(null);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Clear any previous error or shortened URL
    setError(null);
    setShortenedUrl(null);

    // Basic validation: check if input is not empty
    if (!input.trim()) {
      setError("Please enter a valid URL");
      return;
    }

    // Here you would typically call an API to shorten the URL
    const shortenUrl = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Generate a random shortened URL (replace this with real API logic)
        const shortened = `https://shrt.co/${Math.random().toString(36).substr(2, 5)}`;
        setShortenedUrl(shortened);
        toggleModal(); // Open modal immediately after setting the shortened URL
      } catch (err) {
        setError("Failed to shorten URL. Please try again.");
      }
    };

    shortenUrl();
  };

  return (
    <div className='button'>
      <form onSubmit={handleSubmit}>
        <input
          type='url'
          placeholder='Shorten a link here...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required 
          />

        <button type="submit">Shorten it !
           
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      
      {/* Modal */}
      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Your shortened URL:</h2>
            <p>{shortenedUrl}</p>
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputForm;
