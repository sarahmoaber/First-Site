const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    
   
})

userSchema.methods.comparePasswords = (password, hash) => {
    return bcrypt.compareSync(password,hash)
}

let User = mongoose.model('User', userSchema, 'users')

module.exports = User