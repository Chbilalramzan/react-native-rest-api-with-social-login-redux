const validateEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = password => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
  // Return true if the password is valid, false otherwise
};

const isEmpty = value => {
  return value.trim() === '' || value === null;
};

export {validateEmail, validatePassword, isEmpty};
