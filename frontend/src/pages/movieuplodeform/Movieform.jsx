import React, { useState } from 'react'
import "./Movieform.css";
import axios from 'axios'
import Button from '../../Component/buttons/Button';



const WatchlistPage = () => {
  const [poster, setPoster] = useState()
  const [trailer, setTrailer] = useState()
  const [title, setTitle] = useState()
  const [year, setYear] = useState()
  const [description, setDescription] = useState()
  const [category, setCategory] = useState()
  const [cast, setCast] = useState()
  const [rating, setRating] = useState()



  const handlesubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/uploade', {
      poster, trailer, title, year, description, category, cast, rating,
    })
      .then(result => {
        console.log(result)
        setPoster("")
        setTrailer("")
        setTitle("")
        setYear("")
        setDescription("")
        setCategory("")
        setCast("")
        setRating("")
      })
      .catch(err => {
        console.log(err)
      })
  }


  return (
    <div className="container">
      <main>
        <form onSubmit={handlesubmit} className="movie-form" action="#" method="post">
          <label id="name-label">moviePoster<input value={poster} onChange={(e) => setPoster(e.target.value)} type="text" placeholder="Enter your moviePoster url" required /></label>
          <label id="email-label">movieTrailer<input value={trailer} onChange={(e) => setTrailer(e.target.value)} type="text" placeholder="Enter your movieTrailer" required /></label>
          <label id="number-label">movieTitle<input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter your AmovieTitlege" /></label>
          <label id="email-label">movieYear<input value={year} onChange={(e) => setYear(e.target.value)} type="number" placeholder="Enter your movieYear" required /></label>
          <label id="number-label">movieDescription <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Enter your movieDescription" /></label>
          <label id="email-label">movieCategory<input value={category} onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Enter your movieCategory" required /></label>
          <label id="number-label">movieCast <input value={cast} onChange={(e) => setCast(e.target.value)} type="text" placeholder="Enter your movieCast" /></label>
          <label id="number-label">movieRating <input value={rating} onChange={(e) => setRating(e.target.value)} type="number" placeholder="Enter your movieRating" /></label>
          <Button>submit</Button>
        </form>
      </main>
    </div>

  )
}

export default WatchlistPage
