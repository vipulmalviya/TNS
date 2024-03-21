import React, { useState } from 'react'
import "./WatchlistPage.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ButtonSec from '../../Component/buttons/ButtonSec';
import Button from '../../Component/buttons/Button';
import CuratedSlider from '../../Component/Curated-Lists/Top-Movies-Suggestions/CuratedSlider';



const arr = [
  {
    img: "frontend/public/image/7c40e7950bccd488ce91b53447207cad.png",
  },
  {
    img: "frontend/public/image/7c40e7950bccd488ce91b53447207cad.png",
  },
  {
    img: "frontend/public/image/7c40e7950bccd488ce91b53447207cad.png",
  }

]


const data = [
  {
    Poster: 'frontend/public/image/da92a39b19b38d7c9b6e839bfff30d13.png',
    Title: 'title',
    watch: "97.3",
    catagory: "Biography, Drama",
  },
  {
    Poster: 'frontend/public/image/sambhadur.png',
    Title: 'title',
    watch: "97.3",
    catagory: "Biography, Drama",
  },
  {
    Poster: 'frontend/public/image/949842150786a7e1e3aeee4a1b3be7bd.png',
    Title: 'title',

    watch: "97.3",
    catagory: "Biography, Drama",
  },
  {
    Poster: 'frontend/public/image/949842150786a7e1e3aeee4a1b3be7bd.png',
    Title: 'title',

    watch: "97.3",
    catagory: "Biography, Drama",
  },
  {
    Poster: 'frontend/public/image/949842150786a7e1e3aeee4a1b3be7bd.png',
    Title: 'title',

    watch: "97.3",
    catagory: "Biography, Drama",
  },
  {
    Poster: 'frontend/public/image/949842150786a7e1e3aeee4a1b3be7bd.png',
    Title: 'title',

    watch: "97.3",
    catagory: "Biography, Drama",
  }
]



const WatchlistPage = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className='header flex'>
            <h2>My Watchlist </h2>
            <div className='flex gap-1'>
              <img height={"30px"} width={"30px"} src="frontend/public/image/addbtn.svg" alt="" />
              <p>Create New Watchlist</p>
            </div>
          </div>
          <div className='watchlistCards flex'>
            <div className="watchlistCard">
              <div className='gap-2'>
                <h3>Crime - Thriller Movies</h3>
                <div className="moreBtn"></div>
              </div>
              <div className='cardContainer flex'>
                {arr.map((elem, index) =>
                  <div className='card flex' key={index} style={{ backgroundImage: `url(${elem.img})` }}>

                  </div>
                )}
              </div>
              <div className='range'>
                <p>5 Titles Watched out of 10 till Feb</p>
                <progress id="file" value="20" max="100" />
              </div>
            </div>
            <div className="watchlistCard">
              <div className='gap-2'>
                <h3>Crime - Thriller Movies</h3>
                <div className="moreBtn"></div>
              </div>
              <div className='cardContainer flex'>
                {arr.map((elem, index) =>
                  <div className='card flex' key={index} style={{ backgroundImage: `url(${elem.img})` }}>

                  </div>
                )}
              </div>
              <div className='range'>
                <p>5 Titles Watched out of 10 till Feb</p>
                <progress id="file" value="20" max="100" />
              </div>
            </div>
          </div>
        </div>
      </section >
      <section>
        <div className="container">
          <div className='cardHeaders flex'>
            <h2>Previously Watched Titles</h2>
            <div className="seeAllBtn">See All</div>
          </div>
          <OwlCarousel className="MovieCards flex"
            items={5}
            margin={10}
            nav={true}
            // responsiveClass={false}
            dots={false}
            autoplay={true}
            autoplayHoverPause={true}
            responsive={{
              0: {
                items: 1,
                nav: false,
              },
              768: {
                items: 3,
                nav: false,
              },
              1000: {
                items: 4,
                nav: false,
              },
              // 1280: {
              //   items: 3,
              //   nav: false,
              // },
            }}>
            {data.map((elem, index) => <div className="card " key={index}>
              <img height={"400px"} width={"400px"} src={elem.Poster} alt="" />
              <div className='movieDetails'>
                <span className='flex'>
                  <h3>{elem.Title}</h3>
                  <img height={"30px"} src="frontend/public/image/TNS 1.svg" alt="" />
                </span>
                <span className='flex'>
                  <p>{elem.catagory}</p>
                  <span className="number">{elem.watch}</span>
                </span>
                <Button>+ Add to Watchlist</Button>
              </div>
            </div>)}
          </OwlCarousel>
        </div>
      </section>
      <section>
        <div className="container">
          <div className='cardHeaders flex'>
            <h2>Top Suggestions Matches with your Taste</h2>
            <div className="seeAllBtn">See All</div>
          </div>
          <OwlCarousel className="MovieCards flex"
            items={5}
            margin={10}
            nav={true}
            // responsiveClass={false}
            dots={false}
            autoplay={true}
            autoplayHoverPause={true}
            responsive={{
              0: {
                items: 1,
                nav: false,
              },
              768: {
                items: 3,
                nav: false,
              },
              1000: {
                items: 4,
                nav: false,
              },
              // 1280: {
              //   items: 3,
              //   nav: false,
              // },
            }}>
            {data.map((elem, index) => <div className="card " key={index}>
              <img height={"400px"} width={"400px"} src={elem.Poster} alt="" />
              <div className='movieDetails'>
                <span className='flex'>
                  <h3>{elem.Title}</h3>
                  <img height={"30px"} src="frontend/public/image/TNS 1.svg" alt="" />
                </span>
                <span className='flex'>
                  <p>{elem.catagory}</p>
                  <span className="number">{elem.watch}</span>
                </span>
                <ButtonSec><img height={"20px"} width={"20px"} src="frontend/public/image/pen-line.svg" alt="" />Write a Review</ButtonSec>
              </div>
            </div>)}
          </OwlCarousel>
        </div>
      </section>
      <CuratedSlider title={"Curated Lists Just For You"}/>

    </>

  )
}

export default WatchlistPage
