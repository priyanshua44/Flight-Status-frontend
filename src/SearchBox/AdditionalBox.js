import React from 'react';
import './AdditionalBox.css'; 

const AdditionalBox = ({ isVisible, onClose, width, boxType}) => {
  return (
    <div className={`additional-box ${isVisible ? 'show' : 'hide'}`} style={{ width }}>
      <button className="close-btn" onClick={onClose}>Close</button>
      <p>This is the additional box content1.</p>
    </div>
  );
};

export default AdditionalBox;
