/* middleware to check wheather a user is loged in or not before processing requests */
const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const authenticateUser = (req, res, next) => {
    /* check token in cookies  */
    const cookies = cookie.parse(req.headers.cookie || '');
    const token = cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - No token provided' });
  }

  try {
    /* if token found in cookies */
    const decoded = jwt.verify(token, process.env.SECRET_KET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }
};

module.exports = {
  authenticateUser,
};
