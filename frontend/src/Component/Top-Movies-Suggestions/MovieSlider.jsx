import React, {useState } from 'react'
import "./movieSlider.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Card from '../card/Card';


const MovieSlider = ({ title}) => {

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


    const [Movies, setMovies] = useState([])


    // const fetchMovieData = async () => {

    //     const response = await fetch(`http://localhost:5000/allmovies`);
    //     const responsejason = await response.json();
    //     setMovies(responsejason)
    // }
    // console.log(type);

    // useEffect(() => {
    //     const fetchMovieData = async () => {
    //         const response = await fetch(`http://localhost:5000/allmovies`);
    //         const responsejason = await response.json();
    //         setMovies(responsejason);
    //     }

    //     fetchMovieData();
    // })

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
                {/* <div className='arrows'>
                    <span onClick={handlePrevClick}>
                        <img src="frontend/public/image/left.svg" alt="" />
                    </span>
                    <span onClick={handleNextClick}>
                        <img src="frontend/public/image/right.svg" alt="" />
                    </span>
                </div> */}
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
                        },
                        1000: {
                            items: 4,
                        }
                    }}>
                    {data.map((elem, index) =>
                        <Card index={index} Poster={elem.Poster} Title={elem.Title} catagory={elem.catagory} watch={elem.watch} />
                    )}
                </OwlCarousel>
            </div>
        </section>
    )
}

export default MovieSlider
