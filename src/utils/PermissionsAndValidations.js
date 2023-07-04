const validateEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = password => {
  // Perform password validation logic
  // Return true if the password is valid, false otherwise
};

export {validateEmail, validatePassword};
