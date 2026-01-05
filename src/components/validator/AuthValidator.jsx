/**
 * Validate whether a given string is a valid email address (basic check).
 * @param {string} email - Email string to validate.
 * @returns {boolean} True if email matches basic pattern.
 */
const validateEmail = (email) => {
  // Basic email format validation
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

/**
 * Validate password strength.
 * Requires at least one lowercase, one uppercase, one digit, one special character, and minimum length 8.
 * @param {string} password - Password string to validate.
 * @returns {boolean} True if password meets requirements.
 */
const validatePassword = (password) => {
  // At least one lowercase, one uppercase, one number, one special char, min 8 chars
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
  return re.test(password);
};

/**
 * Validate login form fields.
 * Checks presence and basic email format.
 * @param {string} email - User email.
 * @param {string} password - User password.
 * @returns {Object} errors - Object with keys for fields that failed validation.
 */
const validateLoginForm = (email, password) => {
  const errors = {};
  
  if (!email.trim()) {
    errors.email = 'Email cannot be empty';
  } else if (!validateEmail(email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!password.trim()) {
    errors.password = 'Password cannot be empty';
  }

  return errors;
};

/**
 * Validate registration form fields.
 * Performs checks for username, email, password strength, password confirmation, and terms acceptance.
 * @param {string} username
 * @param {string} email
 * @param {string} password
 * @param {string} confirmPassword
 * @param {boolean} termsAccepted
 * @returns {Object} errors - Object containing validation error messages keyed by field.
 */
const validateRegisterForm = (username, email, password, confirmPassword, termsAccepted) => {
  const errors = {};

  if (!username.trim()) {
    errors.username = 'Username cannot be empty';
  } else if (username.length < 3) {
    errors.username = 'Username must be at least 3 characters';
  }

  if (!validateEmail(email)) {
    errors.email = 'Please enter a valid email address';
  }

  
  if (!password) {
    errors.password = 'Password cannot be empty';
  } else if (password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  } else if (!validatePassword(password)) {
    errors.password = 'Password must include uppercase, lowercase, number, & special char';
  }
  
  if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }
  
  if (username === password && username !== '') {
    errors.password = 'Username and password should not be the same';
  }
  
  if (Object.keys(errors).length === 0) {
    if (!termsAccepted) {
      errors.terms = 'You must agree to the Terms of Service and Privacy Policy';
    }
  }
  
  return errors;
};

export { validateLoginForm, validateRegisterForm };