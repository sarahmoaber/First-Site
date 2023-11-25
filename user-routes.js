const express = require('express')
const router = express.Router()
const User = require('/Users/raghadalothman/Desktop/web_project/User.js')
const db = require('./database.js');
const passport = require('passport')
var path = require("path")
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const session = require('express-session')
//const flash = require('connect-flash')



app.use(express.urlencoded());
app.use(express.static(path.join(__dirname,'./')));

// router.use(express.static(path.join(__dirname,'./')))

//first page will open
app.get('/', (req, res) => {
 
  res.sendFile(path.join(__dirname,'./homepagelogin.html'));
})

app.get('/homepage', (req, res) => {
 
    res.sendFile(path.join(__dirname,'./homepage.html'));
})


      


app.all('/login', (req, res) => {
 
        if(req.method == "GET")
        res.sendFile(path.join(__dirname,'./login.html'));
      
        else if(req.method == "POST"){
          console.log(req.body.name)
          console.log(req.body.password)
          
                  
        //find user
        User.findOne({name: req.body.name, password: req.body.password}, (err,user)=> {

          if (err) {
            console.log("error")
              return done(null, false)
          } 
          if(!user) {
            console.log("username or password wrong")
            res.render("errorloginpage")
          }
          if (user) {
            console.log("log in succfully")
            res.redirect('/homepage')
              
          }
        })

        }
      }) 



// sign up  request
app.all('/signup', (req, res) => {
 
    if(req.method == "GET")
    res.sendFile(path.join(__dirname,'./signup.html'));
  
    else if(req.method == "POST"){
    console.log(req.body)
    let newEvent = new User({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email
    })
    
    newEvent.save((err)=>{
      if(!err){
        console.log('added!')
        res.redirect('./login.html')
      }
    })
  }}) 




  app.set('view engine', 'ejs')
  // bring body parser 
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  
  //bring static
  
  app.use(express.static('public'))
  app.use(express.static('node_modules'))
 
  
  app.get('*', (req,res,next)=> {
      res.locals.user = req.user || null
      next()
  })




  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  
  


module.exports = router