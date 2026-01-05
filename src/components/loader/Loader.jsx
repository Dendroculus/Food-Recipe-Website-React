import React from 'react';
import './Loader.css';

/**
 * Loader component that displays a centered three-emoji bouncing loader.
 * @extends React.Component
 */
class Loader extends React.Component {
  /**
   * Render the loader element containing a bouncing emoji sequence.
   * @returns {JSX.Element} The loader JSX.
   */
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