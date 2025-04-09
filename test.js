const encrypt = require('./script.js');

const payload = {
  userId: '12345',
  name: 'Sriman',
  email: 'sriman@example.com'
};

const secret = 'mySuperSecretKey';

const token = encrypt(payload, secret);
console.log('🔐 JWT Token:', token);
