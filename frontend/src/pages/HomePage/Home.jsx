import React, { Fragment } from 'react'
import HandSlider from '../../Component/Top-Hands-Pick/HandSlider'
import ButtonSec from '../../Component/buttons/ButtonSec'
import MovieSlider from '../../Component/Top-Movies-Suggestions/MovieSlider'
import CuratedSlider from '../../Component/Curated-Lists/Top-Movies-Suggestions/CuratedSlider'
import MainSlider from '../../Component/MainSlider/MainSlider'
import "./Home.css"
// import Nav from '../../Component/Nav/Nav'




const Home = ({value}) => {
  return (
    <Fragment>
      <MainSlider Input={value} />
      <section>
        <div className="container">
          <h3 className='SectionLable'>
            craft Your Watchlist {">"}
          </h3>
          <div className='pcontainer flex'>
            <h2>Create a Watchlist that value your taste and time.!</h2>
            <ButtonSec>Let’s see what you’ve got</ButtonSec>
          </div>
        </div>
      </section>
      <HandSlider title={"Top Hand-Pick Suggestions"} />
      <MovieSlider  type={"movie"} title={"Top Movies Suggestions"} />
      <MovieSlider type={"series"} title={"Top Tv Series Suggestions"} />
      <CuratedSlider title={"Curated Lists Just For You"} />

    </Fragment>
  )
}

export default Home
