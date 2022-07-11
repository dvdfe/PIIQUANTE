const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose')
const bodyParser = require('body-parser'); 
const userRoutes = require('./routes/user') 
const saucesRoutes = require('./routes/sauces')
const path = require('path')

require('dotenv').config()

mongoose.connect(process.env.DB_ADMIN,  // Permet de se connecter a mongodb
  
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  
  app.use((req, res, next) => {          // Permet de configurer des autorisations dans le header
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
app.use(bodyParser.json()) 
app.use('/api/auth', userRoutes)
app.use('/api/sauces', saucesRoutes)
app.use('/images', express.static(path.join(__dirname, '/images')));



module.exports = app;