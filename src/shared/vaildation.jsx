export const validateLogin = ({ email, password }) => {
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  return isEmailValid && isPasswordValid;
};

export const validateSignup = ({
  email,
  password,
  username,
  targetLanguage,
  nativeLanguage,
}) => {
  return (
    validateEmail(email) &&
    validatePassword(password) &&
    validateUsername(username) &&
    targetLanguage &&
    nativeLanguage
  );
};

export const validateEmail = (email) => {
  const regularExpression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regularExpression.test(email);
};

const validatePassword = (password) => {
  if (password?.length > 6 && password?.length < 15) {
    return true;
  }
};

const validateUsername = (username) => {
  return username.length > 3 && username.length < 13;
};
