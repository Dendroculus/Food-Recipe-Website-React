import React from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

/**
 * PasswordInput component provides a reusable password input field with eye icon toggle for showing/hiding password text
 *
 * Props:
 * - name: string - input field name attribute 
 * - value: string - current password value
 * - label: string - label text for input
 * - onChange: function - change handler callback
 * - placeholder: string - placeholder text
 * - error: string - error message to display
 * - autoComplete - event - autoComplete attribute
 * - id: HTML id attribute
 *
 * @extends React.Component
 */

class PasswordInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false
        };
    }

    /**
    * Toggle password field visibility.
    * Changes the password input type between 'password' and 'text'.
    * Allows users to verify their password entry before submission.
    * @param {Event} e - Form submit event.
    * @returns {void}
    */
    togglePasswordVisibility = (e) => {
        this.setState(prevState => ({
            showPassword: !prevState.showPassword
        }));
    };

    /**
   * Render the password input field with visibility toggle.
   * @returns {JSX.Element} Password input JSX.
   */
    render() {
        const { name, value, label, onChange, placeholder, error, autoComplete, id, className} = this.props;
        const { showPassword } = this.state;

        return (
            <div className="input-wrapper">
                <label htmlFor={id} className={className}>{label}</label>
                <div className="password-input-group">
                    <input
                    className={`form-control ${error ? 'is-invalid' : ''}`}
                    type={showPassword ? 'text' : 'password'}
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    value={value}
                    onChange={onChange}
                    />
                    <button
                    type='button'
                    className="password-toggle-btn"
                    onClick={this.togglePasswordVisibility}
                    >
                    {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                    </button>
                </div>
                {error && <small className="error-msg">{error}</small>}
            </div>
        )
    }
}

export default PasswordInput;