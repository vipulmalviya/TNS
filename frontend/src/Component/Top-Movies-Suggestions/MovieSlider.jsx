import React, { Fragment, useEffect, useState } from 'react'
import "./movieSlider.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const MovieSlider = ({ title,type }) => {
    const [Movies, setMovies] = useState(
        [
            // {
            //     imageUrl: 'frontend/public/Rectangle 15.jpg',
            //     title: 'OPPENHEIMER',
            //     description: 'During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project...',
            //     year: "2023",
            //     watch: "97.3",
            //     catagory: "Biography, Drama",
            // },
            // {
            //     imageUrl: 'frontend/public/sambhadur.png',
            //     title: 'OPPENHEIMER',
            //     description: 'During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project...',
            //     year: "2023",
            //     watch: "97.3",
            //     catagory: "Biography, Drama",
            // },
            // {
            //     imageUrl: 'frontend/public/949842150786a7e1e3aeee4a1b3be7bd.png',
            //     title: 'OPPENHEIMER',
            //     description: 'During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project...',
            //     year: "2023",
            //     watch: "97.3",
            //     catagory: "Biography, Drama",
            // }
        ]
)
    const fetchMovieData = async () => {
        const response = await fetch(`http://www.omdbapi.com/?s=spider-man&type=${type}&apikey=9c06a160`);
        const responsejason = await response.json();
        setMovies(responsejason.Search)
    }
    // console.log(type);

    useEffect(() => {
        fetchMovieData();
    }, [])


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
                            items: 3,
                            nav: false,
                        },
                        1000: {
                            items: 5,
                            nav: false,
                        },
                    }}>
                    {Movies.map((elem,index) => <div className="card " key={index}>
                        <img height={"400px"} width={"400px"} src={elem.Poster} alt="" />
                        <div className='movieDetails'>
                            <span className='flex'>
                                <h3>{elem.Title}</h3>
                                <img height={"30px"} src="frontend/public/TNS 1.svg" alt="" />
                            </span>
                            <span className='flex'>
                                <p>{elem.Type}</p>
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
