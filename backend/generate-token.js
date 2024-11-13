// generate-token.js
const jwt = require('jsonwebtoken');

const user = {
  _id: '123456',          // Example user ID
  fullName: 'John Doe',   // Example full name
  isdoctor: false,        // Example user type (doctor or patient)
  email: 'john.doe@example.com',  // Example user email
};

// Generate JWT Token (Secret should be stored securely in environment variables)
const secretKey = 'your-secret-key';  // Make sure this is kept secret and never hardcoded in production

const token = jwt.sign(user, secretKey, { expiresIn: '1h' });

console.log('Generated Token:', token);
