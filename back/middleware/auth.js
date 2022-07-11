const jwt = require('jsonwebtoken');
const User = require('../models/user'); 

module.exports = (req, res, next) => {  // middleware qui permet de vérifier si un utilisateur est valide ou pas
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const user = User.findOne({ where: { userId: decodedToken.userId } })
    if (!user) {
      throw 'Invalid user ID';
    } else {
      req.user = user
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};