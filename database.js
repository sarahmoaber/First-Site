
// استدعاء مكتبه المانقووز
const mongoose = require('mongoose')

// creat database
 let db = mongoose.connect('mongodb://localhost:27017/myapp', (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('connect to db succesfully')
    }
})


/*const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, password: {
        type: String,
        required: true
    }, email: {
        type: String,
        required: true
    }
})
let backend_mongodb = mongoose.model('backend_mongodb', employeeSchema, 'employee')

//method for login
employeeSchema.methods.comparePasswords = (password, hash) =>{
    return bcrypt.compareSync(password, hash)
}

module.exports = backend_mongodb */














