import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import { userModel } from './users.js';
import { movieModel } from './movies.js';


// const userModel = require('./users.js')
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/moviedb")
  console.log("db connect");
}

const app = express()
app.use(express.json())
app.use(cors())


// for register detalis

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



// for login detalis
app.post('/', async (req, res) => {
  const { email, password } = req.body;
  userModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.pass === password) {
          res.json("success")
        } else {
          res.json("the password is incorrect")
        }
      } else {
        res.json("no record existed")
      }
    })
})


// for demo
app.get('/connect', async (req, res) => {
  res.send("hello")
})



// for fetch all movies end point

app.get('/allmovies', async (req, res) => {

  try {
    const movies = await movieModel.find();
    res.json(movies);
  }
  catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})






// for movies uplode

app.post("/uploade", async (req, res) => {
  let moviedata = new movieModel();
  moviedata.moviePoster = req.body.poster;
  moviedata.movieTrailer = req.body.trailer;
  moviedata.movieTitle = req.body.title;
  moviedata.movieYear = req.body.year;
  moviedata.movieDescription = req.body.description;
  moviedata.movieCategory = req.body.category;
  moviedata.movieCast = req.body.cast;
  moviedata.movieRating = req.body.rating;
  const doc = await moviedata.save();
  res.send(doc);
  console.log(doc)
})




app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});