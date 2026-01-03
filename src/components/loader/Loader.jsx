import React from 'react';
import './Loader.css';

class Loader extends React.Component {
  render() {
    return (
      <div className="loader-container">
        <div className="emoji-bouncer">
          <span>🥕</span>
          <span>🥘</span>
          <span>🥦</span>
        </div>
      </div>
    );
  }
}

export default Loader;
