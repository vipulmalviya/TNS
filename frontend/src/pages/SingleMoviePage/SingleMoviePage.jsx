import React, { Fragment } from 'react'
import Button from '../../Component/buttons/Button'
import { Link } from 'react-router-dom'
import "./SingleMoviePage.css"
import ButtonSec from '../../Component/buttons/ButtonSec'
import MovieSlider from '../../Component/Top-Movies-Suggestions/MovieSlider'




const SingleMoviePage = () => {

  return (
    <Fragment>
      <div className='Movieposter'
        style={{ background: `linear-gradient(to top, black, transparent), url(${"frontend/public/image/openhaimer.jpg"})` }}
      ></div>
      <section className='singleSection'>
        <div className="container movieContianer flex">
          <div className='Sleft flex'>
            <div className="trailerCard flex">
              <div className="imgbox">
                <img width={"100%"} height={"100%"} src="frontend/public/image/oppenheimer.png" alt="" />
              </div>
              <Button>
                <img height={"17px"} width={"17px"} src="frontend/public/image/play.svg" alt="" />
                <p>stream now</p>
              </Button>
              <ButtonSec>
                <img height={"17px"} width={"17px"} src="frontend/public/image/plus-large.svg" alt="" />
                <p>add to watchlist</p>
              </ButtonSec>
              <ButtonSec>
                <img src="frontend/public/image/spotify.svg" alt="" />
                <p>Listen on Spotify</p>
              </ButtonSec>
            </div>
            <div className="aboutMovies">
              <div>
                <div className="movieTitle">OPPENHEIMER</div>
                <div className='movieReales flex'>
                  <div className="movieType">Biography, Drama</div>
                  <div className="moviePG">PG-13</div>
                  <div className="movieTime">2h 36m</div>
                  <div className="movieYear">2023</div>
                </div>
              </div>
              <div>
                <div className="Details flex">
                  <h3>Details:</h3>
                  <div className='flex'>
                    <p className="key">Directed By:</p>
                    <p className="value">Christopher Nolan</p>
                  </div>
                  <div className='flex'>
                    <p className="key">Written By:</p>
                    <p className="value">Christopher Nolan</p>
                  </div>
                  <div className='flex'>
                    <p className="key">Cinematography By:</p>
                    <p className="value">Hoyte van Hoytema</p>
                  </div>
                  <div className='flex'>
                    <p className="key">Accolades:</p>
                    <p className="value">Best Picture, Best Director, Best Actor, Best Actor In Supporting Role, Best Cinematography, Best Film Editing, Best Original Score</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='Plot'>
                  <h3>Plot:</h3>
                  <div className="value">During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project...During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project.</div>
                </div>
              </div>
            </div>
          </div>
          <div className='Sright'>
            <div className='movieScore flex '>
              <div className="aboutTns flex flexbox">
                <div className='flex'>
                  <div className="tnslogo">
                    <img height={"50px"} width={"70px"} src="frontend/public/image/Logo.svg" alt="" />
                  </div>
                  <div className="tnsScore">92.6</div>
                </div>
                <h4>TNS Score</h4>
                <Link>What is TNS Score?</Link>
              </div>
              <div className="UserRiviews flex flexbox">
                <div className='flex'>
                  <div className="UserIcone">
                    <img height={"50px"} width={"50px"} src="frontend/public/image/users.svg" alt="" />
                  </div>
                  <div className="UserRiview">9.6</div>
                </div>
                <h4>User Reviews Rating</h4>
                <Link>(541 Users)</Link>
              </div>
            </div>
            <div className='Alluser  '>
              <div className="viewAll">
                <p>View All</p>
              </div>
              <div className="usercard flex">
                <img height={"50px"} width={"50px"} src="frontend/public/image/userimg.png" alt="" />
                <div className="userDetails flex flexbox">
                  <h4>Cillian Murphy</h4>
                  <p>J. Robert Oppenheimer</p>
                </div>
              </div>
              <div className="usercard flex">
                <img height={"50px"} width={"50px"} src="frontend/public/image/userimg.png" alt="" />
                <div className="userDetails flex flexbox">
                  <h4>Cillian Murphy</h4>
                  <p>J. Robert Oppenheimer</p>
                </div>
              </div>
              <div className="usercard flex">
                <img height={"50px"} width={"50px"} src="frontend/public/image/userimg.png" alt="" />
                <div className="userDetails flex flexbox">
                  <h4>Cillian Murphy</h4>
                  <p>J. Robert Oppenheimer</p>
                </div>
              </div>
              <div className="usercard flex">
                <img height={"50px"} width={"50px"} src="frontend/public/image/userimg.png" alt="" />
                <div className="userDetails flex flexbox">
                  <h4>Cillian Murphy</h4>
                  <p>J. Robert Oppenheimer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container movierating flex">
          <div className="left flex flexbox">
            <h3>User Rating & Review </h3>
            <div className='leftT flex'>
              <div className="score">9.6</div>
              <Link className='flex'>based on 541 users reviews</Link>
            </div>
            <div className='flex'>
              <h4>Storyline</h4>
              <div className="rating-stars flex">
                <input type="radio" name="rating" id="rs0" defaultChecked /><label htmlFor="rs0" />
                <input type="radio" name="rating" id="rs1" /><label htmlFor="rs1" />
                <input type="radio" name="rating" id="rs2" /><label htmlFor="rs2" />
                <input type="radio" name="rating" id="rs3" /><label htmlFor="rs3" />
                <input type="radio" name="rating" id="rs4" /><label htmlFor="rs4" />
                <input type="radio" name="rating" id="rs5" /><label htmlFor="rs5" />
                <input type="radio" name="rating" id="rs6" /><label htmlFor="rs6" />
                <input type="radio" name="rating" id="rs7" /><label htmlFor="rs7" />
                <input type="radio" name="rating" id="rs8" /><label htmlFor="rs8" />
                <input type="radio" name="rating" id="rs9" /><label htmlFor="rs9" />
                <span className="rating-counter" />
              </div>
            </div>
            <div className='flex'>
              <h4>Acting</h4>
              <div className="rating-stars">
                <input type="radio" name="rating" id="rs0" defaultChecked /><label htmlFor="rs0" />
                <input type="radio" name="rating" id="rs1" /><label htmlFor="rs1" />
                <input type="radio" name="rating" id="rs2" /><label htmlFor="rs2" />
                <input type="radio" name="rating" id="rs3" /><label htmlFor="rs3" />
                <input type="radio" name="rating" id="rs4" /><label htmlFor="rs4" />
                <input type="radio" name="rating" id="rs5" /><label htmlFor="rs5" />
                <input type="radio" name="rating" id="rs6" /><label htmlFor="rs6" />
                <input type="radio" name="rating" id="rs7" /><label htmlFor="rs7" />
                <input type="radio" name="rating" id="rs8" /><label htmlFor="rs8" />
                <input type="radio" name="rating" id="rs9" /><label htmlFor="rs9" />
                <span className="rating-counter" />
              </div>
            </div>
            <div className='flex'>
              <h4>Direction</h4>
              <div className="rating-stars">
                <input type="radio" name="rating" id="rs0" defaultChecked /><label htmlFor="rs0" />
                <input type="radio" name="rating" id="rs1" /><label htmlFor="rs1" />
                <input type="radio" name="rating" id="rs2" /><label htmlFor="rs2" />
                <input type="radio" name="rating" id="rs3" /><label htmlFor="rs3" />
                <input type="radio" name="rating" id="rs4" /><label htmlFor="rs4" />
                <input type="radio" name="rating" id="rs5" /><label htmlFor="rs5" />
                <input type="radio" name="rating" id="rs6" /><label htmlFor="rs6" />
                <input type="radio" name="rating" id="rs7" /><label htmlFor="rs7" />
                <input type="radio" name="rating" id="rs8" /><label htmlFor="rs8" />
                <input type="radio" name="rating" id="rs9" /><label htmlFor="rs9" />
                <span className="rating-counter" />
              </div>
            </div>
            <div className='flex'>
              <h4>Production Quality</h4>
              <div className="rating-stars">
                <input type="radio" name="rating" id="rs0" defaultChecked /><label htmlFor="rs0" />
                <input type="radio" name="rating" id="rs1" /><label htmlFor="rs1" />
                <input type="radio" name="rating" id="rs2" /><label htmlFor="rs2" />
                <input type="radio" name="rating" id="rs3" /><label htmlFor="rs3" />
                <input type="radio" name="rating" id="rs4" /><label htmlFor="rs4" />
                <input type="radio" name="rating" id="rs5" /><label htmlFor="rs5" />
                <input type="radio" name="rating" id="rs6" /><label htmlFor="rs6" />
                <input type="radio" name="rating" id="rs7" /><label htmlFor="rs7" />
                <input type="radio" name="rating" id="rs8" /><label htmlFor="rs8" />
                <input type="radio" name="rating" id="rs9" /><label htmlFor="rs9" />
                <span className="rating-counter" />
              </div>
            </div>
            <div className='flex'>
              <h4>Entertainment Value</h4>
              <div className="rating-stars">
                <input type="radio" name="rating" id="rs0" defaultChecked /><label htmlFor="rs0" />
                <input type="radio" name="rating" id="rs1" /><label htmlFor="rs1" />
                <input type="radio" name="rating" id="rs2" /><label htmlFor="rs2" />
                <input type="radio" name="rating" id="rs3" /><label htmlFor="rs3" />
                <input type="radio" name="rating" id="rs4" /><label htmlFor="rs4" />
                <input type="radio" name="rating" id="rs5" /><label htmlFor="rs5" />
                <input type="radio" name="rating" id="rs6" /><label htmlFor="rs6" />
                <input type="radio" name="rating" id="rs7" /><label htmlFor="rs7" />
                <input type="radio" name="rating" id="rs8" /><label htmlFor="rs8" />
                <input type="radio" name="rating" id="rs9" /><label htmlFor="rs9" />
                <span className="rating-counter" />
              </div>
            </div>
          </div>
          <div className="right flex flexbox">
            <div className='flex'>
              <img src="frontend/public/image/Ellipse 33.svg" alt="" />
              <div className="rating-stars">
                <input type="radio" name="rating" id="rs0" defaultChecked /><label htmlFor="rs0" />
                <input type="radio" name="rating" id="rs1" /><label htmlFor="rs1" />
                <input type="radio" name="rating" id="rs2" /><label htmlFor="rs2" />
                <input type="radio" name="rating" id="rs3" /><label htmlFor="rs3" />
                <input type="radio" name="rating" id="rs4" /><label htmlFor="rs4" />
                <input type="radio" name="rating" id="rs5" /><label htmlFor="rs5" />
                <input type="radio" name="rating" id="rs6" /><label htmlFor="rs6" />
                <input type="radio" name="rating" id="rs7" /><label htmlFor="rs7" />
                <input type="radio" name="rating" id="rs8" /><label htmlFor="rs8" />
                <input type="radio" name="rating" id="rs9" /><label htmlFor="rs9" />
              </div>
            </div>
            <p>A non spoiler detail review:
               <br />It's actually the best scientific Biopic made after The theory of everything!! <br /> A Cult classic cinema <br /> Christopher Nolan outshines in his technicality experimentation of direction with subjectives and objectives clearly shown in Black And white that too on an IMAX reel !!</p>

            <ButtonSec>See All Reviews (541)</ButtonSec>

          </div>
        </div>
      </section>

    <MovieSlider title={"More Christopher Nolan Movies"}/>
    <MovieSlider title={"Biographical Movies Like Oppenheimer That’ll Impact You Deeply"}/>
    <MovieSlider title={"Oscars Winning Movies For You"}/>



    </Fragment>
  )
}

export default SingleMoviePage
