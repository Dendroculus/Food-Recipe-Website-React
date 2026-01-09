import React from 'react';
import InfoModals from './InfoModals';
import CookieConsent from './CookieConsent';
import './Modals.css'; 

/**
 * Wrapper component that serves as the entry point for all application modals.
 * It renders both the static informational modals and the interactive cookie consent system.
 * @extends React.Component
 */
class Modals extends React.Component {
  /**
   * Render method for the Modals wrapper.
   * @returns {JSX.Element} The rendered component tree containing InfoModals and CookieConsent.
   */
  render() {
    return (
      <>
        <InfoModals />
        <CookieConsent />
      </>
    );
  }
}

export default Modals;