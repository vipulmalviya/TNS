import React, { Fragment } from 'react'
import "./HandSlider.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const HandSlider = ({title}) => {
    const Lcard = [
        {
            cardID: 1,
            cardUrl: "frontend/public/image/da92a39b19b38d7c9b6e839bfff30d13.png",
        },
        {
            cardID: 2,
            cardUrl: "frontend/public/image/299c4228c5a9a0bad5783800b7cff179.png",
        },
        {
            cardID: 3,
            cardUrl: "frontend/public/image/96ec47c5bba1a99388ccc5c88666398e.png",
        },
        {
            cardID: 4,
            cardUrl: "frontend/public/image/7c40e7950bccd488ce91b53447207cad.png",
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
                {/* <span onClick={handlePrevClick}>
                    <img src="frontend/public/image/left.svg" alt="" />
                </span>
                <span onClick={handleNextClick}>
                    <img src="frontend/public/image/right.svg" alt="" />
                </span> */}
            </div>
            <OwlCarousel className="HandCards flex"
                items={4}
                margin={20}
                responsiveClass={false}
                nav={true}
                autoplay={false}
                dots={false}
                autoplayHoverPause={false}
                responsive={{
                    0: {
                        items: 1,
                        nav:false,

                    },
                    800: {
                        items: 2,
                        margin:100,
                    },
                    1000: {
                        items: 4,
                    },
                    // 1280: {
                    //     items: 4,
                    // }
                }}>
                {Lcard.map((elem,index) => <div className="card flex" key={index}>
                    <h2 className='flex'>{elem.cardID}</h2>
                    <img  src={elem.cardUrl} alt="" />
                </div>)}
            </OwlCarousel>
        </div>
        </section>
    )
}

export default HandSlider
