import React, { Fragment, useEffect, useState } from 'react'
import "./movieSlider.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Button from '../buttons/Button';


const MovieSlider = ({ title, type }) => {

    // const data = [
    //     {
    //         Poster: 'frontend/public/image/da92a39b19b38d7c9b6e839bfff30d13.png',
    //         Title: 'title',
    //         watch: "97.3",
    //         catagory: "Biography, Drama",
    //     },
    //     {
    //         Poster: 'frontend/public/image/sambhadur.png',
    //         Title: 'title',
    //         watch: "97.3",
    //         catagory: "Biography, Drama",
    //     },
    //     {
    //         Poster: 'frontend/public/image/949842150786a7e1e3aeee4a1b3be7bd.png',
    //         Title: 'title',

    //         watch: "97.3",
    //         catagory: "Biography, Drama",
    //     },
    //     {
    //         Poster: 'frontend/public/image/949842150786a7e1e3aeee4a1b3be7bd.png',
    //         Title: 'title',

    //         watch: "97.3",
    //         catagory: "Biography, Drama",
    //     },
    //     {
    //         Poster: 'frontend/public/image/949842150786a7e1e3aeee4a1b3be7bd.png',
    //         Title: 'title',

    //         watch: "97.3",
    //         catagory: "Biography, Drama",
    //     },
    //     {
    //         Poster: 'frontend/public/image/949842150786a7e1e3aeee4a1b3be7bd.png',
    //         Title: 'title',

    //         watch: "97.3",
    //         catagory: "Biography, Drama",
    //     }
    // ]


    const [Movies, setMovies] = useState([])


    // const fetchMovieData = async () => {

    //     const response = await fetch(`http://localhost:5000/allmovies`);
    //     const responsejason = await response.json();
    //     setMovies(responsejason)
    // }
    // console.log(type);

    useEffect(() => {
        const fetchMovieData = async () => {
            const response = await fetch(`http://localhost:5000/allmovies`);
            const responsejason = await response.json();
            setMovies(responsejason);
        }

        fetchMovieData();
    })

console.log(Movies);
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
                        <img src="frontend/public/image/left.svg" alt="" />
                    </span>
                    <span onClick={handleNextClick}>
                        <img src="frontend/public/image/right.svg" alt="" />
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
                            items: 3,
                            nav: false,
                        },
                        1000: {
                            items: 5,
                            nav: false,
                        },
                    }}>
                    {Movies.map((elem, index) => <div className="card " key={index}>
                        <img height={"400px"} width={"400px"} src={elem.moviePoster} alt="" />
                        <div className='movieDetails'>
                            <span className='flex'>
                                <h4>{elem.movieTitle}</h4>
                                <img height={"30px"} src="frontend/public/image/TNS 1.svg" alt="" />
                            </span>
                            <span className='flex'>
                                <p>{elem.movieCategory}</p>
                                <span className="number">{elem.movieRating}</span>
                            </span>
                            <Button>+ Add to Watchlist</Button>
                        </div>
                    </div>)}
                </OwlCarousel>
            </div>
        </section>
    )
}

export default MovieSlider
