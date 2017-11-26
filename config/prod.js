// prod.js - production keys is here!
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURL: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  googleRedirestURI: 'https://obscure-fortress-50217.herokuapp.com'
};