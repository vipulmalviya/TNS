import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import "./MainSlider.css"
import Button from '../buttons/Button';
import ButtonSec from '../buttons/ButtonSec';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

const MainSlider = () => {
    // Sample data for the slides
    const slides = [
        {
            imageUrl: 'frontend/public/Rectangle 15.jpg',
            title: 'OPPENHEIMER',
            description: 'During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project...',
            year: "2023",
            watch: "97.3",
            catagory: "Biography, Drama",
        },
        {
            imageUrl: 'frontend/public/sambhadur.png',
            title: 'OPPENHEIMER',
            description: 'During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project...',
            year: "2023",
            watch: "97.3",
            catagory: "Biography, Drama",
        }, {
            imageUrl: 'frontend/public/949842150786a7e1e3aeee4a1b3be7bd.png',
            title: 'OPPENHEIMER',
            description: 'During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project...',
            year: "2023",
            watch: "97.3",
            catagory: "Biography, Drama",
        },
    ];

    const handlePrevClick = () => {
        $(".owl-carousel").trigger("prev.owl.carousel");
      };
    
      const handleNextClick = () => {
        $(".owl-carousel").trigger("next.owl.carousel");
      };
    

    return (
        <div className='MainSlider'>
            <div className='arrows'>
                <span onClick={handlePrevClick}>
                    <img src="frontend/public/left.svg" alt="" />
                </span>
                <span onClick={handleNextClick}>
                    <img src="frontend/public/right.svg" alt="" />
                </span>
            </div>
            <OwlCarousel
                items={3}
                margin={20}
                nav={false}
                dots={true}
                className='MainSlider'
                //  responsiveClass={false}
                 autoplay={true}
                 autoplayHoverPause={true}
                responsive={{
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 1,
                    },
                    1000: {
                        items: 1,
                    }
                }}

            >

                {slides.map((slide, index) => (
                    <div key={index} className="slide-item">
                        <img height={"100%"} width={"100%"} className='bannerImg' src={slide.imageUrl} alt={slide.title} />
                        <div className="slide-details">
                            <h2 className='movieTitle'>{slide.title}</h2>
                            <div className='aboutMovie flex'>
                                <p>{slide.catagory}</p>
                                <p>{slide.year}</p>
                                <span className='flex'>
                                    <img src="frontend/public/Icon (5).svg" alt="" />
                                    <h3 className="number">{slide.watch}</h3>
                                </span>
                            </div>
                            <p className='movieDescription'>{slide.description}</p>
                            <div className='movieBtns flex'>
                                <Button>
                                    <img height={"17px"} width={"17px"} src="frontend/public/play.svg" alt="" />
                                    <p>stream now</p>
                                </Button>
                                <ButtonSec>
                                    <img height={"17px"} width={"17px"} src="frontend/public/plus-large.svg" alt="" />
                                    <p>add to watchlist</p>
                                </ButtonSec>
                            </div>
                        </div>
                    </div>
                ))}
            </OwlCarousel>
            {/* </div> */}
        </div>
    );
};

export default MainSlider;
