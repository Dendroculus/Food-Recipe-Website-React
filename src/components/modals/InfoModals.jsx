import React from 'react';

/**
 * Component responsible for rendering static informational modals (Terms, Privacy, Disclaimer).
 * These modals are targeted via CSS ID anchors (e.g., #terms-modal).
 * @extends React.Component
 */
class InfoModals extends React.Component {
  /**
   * Constructor for InfoModals.
   * @param {object} props - Component props.
   */
  constructor(props) {
    super(props);

    /**
     * Array of modal data objects.
     * Each object contains:
     * - id: HTML ID used for CSS :target triggering
     * - title: The header text of the modal
     * - paragraphs: Array of strings for the modal body content
     * @type {Array<{id: string, title: string, paragraphs: string[]}>}
     */
    this.modals = [
      {
        id: 'terms-modal',
        title: 'Terms of Use',
        paragraphs: [
          'This project is created for educational purposes only. All content, images, and code included are for study and demonstration.',
          'Images used in this project are sourced randomly for learning purposes and are not intended for redistribution or commercial use.',
          'The code is released under the MIT License. You are free to study, modify, and use it for personal learning or academic projects.',
        ],
      },
      {
        id: 'privacy-modal',
        title: 'Privacy Policy',
        paragraphs: [
          'No personal data is collected in this project. Any email inputs (e.g., in forms) are purely for demonstration and do not send or store real data.',
          'This project is meant only to show functionality and interface design for learning purposes.',
        ],
      },
      {
        id: 'disclaimer-modal',
        title: 'Disclaimer',
        paragraphs: [
          'This website and its cookie settings are for educational purposes only as part of a school project. No actual data is collected or stored.',
          'Some images used in this project are sourced from Google Images and are for educational and demonstration purposes only. All rights belong to their respective owners',
        ],
      },
    ];
  }

  /**
   * Renders the list of informational modals.
   * @returns {JSX.Element} A fragment containing all modal divs.
   */
  render() {
    return (
      <>
        {this.modals.map((modal) => (
          <div key={modal.id} id={modal.id} className="modal">
            <div className="modal-content">
              <a href="#!" className="close">×</a>
              <h2>{modal.title}</h2>
              {modal.paragraphs.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default InfoModals;