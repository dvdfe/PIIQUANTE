// Schéma qui permet de créer un utilisateur dans la base de données mongodb pour une sauce


const mongoose = require('mongoose'); 
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({ 
  email: { type: String, required: true, unique: "Adresse mail déja utilisée" },
  password: { type: String, required: true }
})

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model("User", userSchema) 