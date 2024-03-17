import React, { Fragment } from 'react'
import "./CuratedSlider.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Button from '../../buttons/Button';



const CuratedSlider = ({ title }) => {
    const Lcard = [
        {
            cardID: 1,
            Url: "frontend/public/949842150786a7e1e3aeee4a1b3be7bd.png",
            content: "Biographical Movies Like Oppenheimer That’ll Impact You Deeply",
            watch: "91.5",
            paragraph: "6 Movies Ranked According to TNS Score",
        },
        {
            cardID: 2,
            Url: "frontend/public/949842150786a7e1e3aeee4a1b3be7bd.png",
            content: "Biographical Movies Like Oppenheimer That’ll Impact You Deeply",
            watch: "91.5",
            paragraph: "6 Movies Ranked According to TNS Score",
        },
        {
            cardID: 3,
            Url: "frontend/public/949842150786a7e1e3aeee4a1b3be7bd.png",
            content: "Biographical Movies Like Oppenheimer That’ll Impact You Deeply",
            watch: "91.5",
            paragraph: "6 Movies Ranked According to TNS Score",
        },
    ];
    return (
        <section>
            <div className="container">
                <h3 className='SectionLable'>{title}{">"}</h3>
                <OwlCarousel className="CuratedCards flex"
                    items={4}
                    margin={20}
                    nav={true}
                    // responsiveClass={false}
                    dots={false}
                    autoplay={true}
                    autoplayHoverPause={true}
                    responsive={{
                        0: {
                            items: 1,
                        },
                        768: {
                            items: 2,
                        },
                        1000: {
                            items: 3,
                        },
                    }}>
                    {Lcard.map((elem) => <div className="card flex flexbox" key={elem.cardID} style={{
                        background: `linear-gradient(to top, black, transparent), url(${elem.Url})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <div className='CardContainer flex flexbox'>
                            <div className="tag">
                                Curated List
                            </div>
                            <h3>{elem.content}</h3>
                            <p>{elem.paragraph}</p>
                            <Button>
                                See All Titles
                                {/* <span>
                                <img height={"100%"} width={"100%"} src="frontend/public/arrow-sm-right.svg" alt="" />
                            </span> */}
                            </Button>
                        </div>
                    </div>)}
                </OwlCarousel>
            </div>
        </section>
    )
}

export default CuratedSlider