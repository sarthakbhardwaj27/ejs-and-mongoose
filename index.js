const express = require('express')
const path = require('path')
const ejs = require('ejs')
const userModel = require('./models/user');

const port = 8080;
const app = express()

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res)=>{
  res.render('index')
})

app.get('/users',async (req,res)=>{
  let allUsers = await userModel.find()
  res.render('users', {users: allUsers} )
})

app.get('/delete/:userId', async (req,res)=>{
  let users = await userModel.findOneAndDelete({_id:req.params.userId})
  res.redirect("/users")
})

app.get('/edit/:userId', async (req,res)=>{
  let user = await userModel.findOne({_id:req.params.userId});
  res.render('edit', {user:user});
})

app.post('/createUser', async (req,res)=>{
  // console.log(req.body)
  let {name,email,image} = req.body
  let createdUser = await userModel.create({
    name,email,image
  });

  console.log(createdUser);
  res.redirect('/users')
})

app.post('/update/:userId', async (req,res)=>{
  let {image,name,email} = req.body;
  let user = await userModel.findOneAndUpdate({_id: req.params.userId}, {name,email,image}, {new: true} )
  // res.render('edit', {user})
  res.redirect('/users')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})