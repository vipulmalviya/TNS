import React, { Fragment } from 'react'
import "./movieSlider.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const MovieSlider = ({ title }) => {
    const Lcard = [
        {
            cardID: 1,
            cardUrl: "frontend/public/da92a39b19b38d7c9b6e839bfff30d13.png",
            movieName: "Saltburn",
            watch: "91.5",
            category: "Comedy,Drama",
        },
        {
            cardID: 2,
            cardUrl: "frontend/public/299c4228c5a9a0bad5783800b7cff179.png",
            movieName: "Saltburn",
            watch: "91.5",
            category: "Comedy,Drama",
        },
        {
            cardID: 3,
            cardUrl: "frontend/public/7c40e7950bccd488ce91b53447207cad.png",
            movieName: "Saltburn",
            watch: "91.5",
            category: "Comedy,Drama",
        },
        {
            cardID: 4,
            cardUrl: "frontend/public/7c40e7950bccd488ce91b53447207cad.png",
            movieName: "Saltburn",
            watch: "91.5",
            category: "Comedy,Drama",
        },
        {
            cardID: 5,
            cardUrl: "frontend/public/7c40e7950bccd488ce91b53447207cad.png",
            movieName: "Saltburn",
            watch: "91.5",
            category: "Comedy,Drama",
        },
        {
            cardID: 6,
            cardUrl: "frontend/public/7c40e7950bccd488ce91b53447207cad.png",
            movieName: "Saltburn",
            watch: "91.5",
            category: "Comedy,Drama",
        }
    ];


    const handlePrevClick = () => {
        $(".owl-carousel").trigger("prev.owl.carousel");
      };
    
      const handleNextClick = () => {
        $(".owl-carousel").trigger("next.owl.carousel");
      };
    
    return (
        <section>
            <div className="container">
                <h3 className='SectionLable'>{title}{">"}</h3>
                <div className='arrows'>
                <span onClick={handlePrevClick}>
                    <img src="frontend/public/left.svg" alt="" />
                </span>
                <span onClick={handleNextClick}>
                    <img src="frontend/public/right.svg" alt="" />
                </span>
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
                            items: 2,
                            nav: false,
                        },
                        1000: {
                            items: 5,
                            nav: false,
                        },
                    }}>
                    {Lcard.map((elem) => <div className="card " key={elem.cardID}>
                        <img height={"100%"} width={"100%"} src={elem.cardUrl} alt="" />
                        <div className='movieDetails'>
                            <span className='flex'>
                                <h3>{elem.movieName}</h3>
                                <img height={"30px"} src="frontend/public/TNS 1.svg" alt="" />
                            </span>
                            <span className='flex'>
                                <p>{elem.category}</p>
                                <span className="number">{elem.watch}</span>
                            </span>
                        </div>
                    </div>)}
                </OwlCarousel>
            </div>
        </section>
    )
}

export default MovieSlider
