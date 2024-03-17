import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import { userModel } from './users.js';
// const userModel = require('./users.js')
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/moviedb")
  console.log("db connect");
}

const app = express()
app.use(express.json())
app.use(cors())


// app.get('/', (req, res) => {
//   res.send('hello world')
// })

app.post('/register', async (req, res) => {
  let user = new userModel();
  user.email = req.body.email;
  user.password = req.body.pass;
 const doc = await user.save();
  // userModel.create(req.body)
  //   .then(user => res.json(user))
  //   .catch(err => res.json(err))
  console.log(doc)
  res.json(doc)
})
app.post('/', async (req, res) => {
  userModel.findOne({email: req.body.email})
  .then(user => {
    if(user){
      if(user.pass === req.body.pass){
        res.json("success")
      }else{
        res.json("the password is incorrect")
      }
    }else{
      res.json("no record existed")
    }
  })

//   let user = new userModel();
//   user.email = req.body.email;
//   user.password = req.body.pass;
//  const doc = await user.save();
//   // userModel.create(req.body)
//   //   .then(user => res.json(user))
//   //   .catch(err => res.json(err))
//   console.log(doc)
//   res.json(doc)
})



app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});