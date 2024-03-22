import React from 'react'
import "./CuratedPage.css"
import { Fragment } from 'react'
import ButtonSec from '../../Component/buttons/ButtonSec'
import Button from '../../Component/buttons/Button'
import { Link } from 'react-router-dom'
import CuratedSlider from '../../Component/Curated-Lists/Top-Movies-Suggestions/CuratedSlider'
export const CuratedPage = () => {

    const data = [
        {
        id:"01.",
        title: "The Imitation Game",
        type: "Biography, Thriller, War",
        pg: "CBFC: U/A",
        time: "1h 54m",
        year: "2014",
        directer: "Morten Tyldum",
        accolades: "Academy Award for Best Adapted Screenplay",
        plot: "Alan Turing, a British mathematician, joins the cryptography team to decipher the German enigma code. With the help of his fellow mathematicians, he builds a machine to crack the codes.",
        tnsScore: "92.6",
        userReviews: "9.6",
        link:"frontend/public/image/sambhadur.png"
    },
        {
        id:"02.",
        title: "The Imitation Game",
        type: "Biography, Thriller, War",
        pg: "CBFC: U/A",
        time: "1h 54m",
        year: "2014",
        directer: "Morten Tyldum",
        accolades: "Academy Award for Best Adapted Screenplay",
        plot: "Alan Turing, a British mathematician, joins the cryptography team to decipher the German enigma code. With the help of his fellow mathematicians, he builds a machine to crack the codes.",
        tnsScore: "92.6",
        userReviews: "9.6",
        link:"frontend/public/image/sambhadur.png"
    },
        {
        id:"03.",
        title: "The Imitation Game",
        type: "Biography, Thriller, War",
        pg: "CBFC: U/A",
        time: "1h 54m",
        year: "2014",
        directer: "Morten Tyldum",
        accolades: "Academy Award for Best Adapted Screenplay",
        plot: "Alan Turing, a British mathematician, joins the cryptography team to decipher the German enigma code. With the help of his fellow mathematicians, he builds a machine to crack the codes.",
        tnsScore: "92.6",
        userReviews: "9.6",
        link:"frontend/public/image/sambhadur.png"
    },
        {
        id:"04.",
        title: "The Imitation Game",
        type: "Biography, Thriller, War",
        pg: "CBFC: U/A",
        time: "1h 54m",
        year: "2014",
        directer: "Morten Tyldum",
        accolades: "Academy Award for Best Adapted Screenplay",
        plot: "Alan Turing, a British mathematician, joins the cryptography team to decipher the German enigma code. With the help of his fellow mathematicians, he builds a machine to crack the codes.",
        tnsScore: "92.6",
        userReviews: "9.6",
        link:"frontend/public/image/sambhadur.png"
    },
]

    return (
        <Fragment>
            <div className='Curated_banner' style={{ background: ` url(${"frontend/public/image/openhaimer.jpg"})` }}
            >
                <div className='Curated_movie_details flex flexbox'>
                    <span className='tag'>Curated List</span>
                    <h3>Biographical Movies Like Oppenheimer That’ll Impact You Deeply</h3>
                    <p>Ranked According to TNS score</p>
                </div>
            </div>
            {data.map((elem) => <section>
                <div className="container Curated_list_Container flex">
                    <div className='number_div'>{elem.id}</div>
                    <div className='center_div'>
                        <div className='Sleft flex'>
                            <div className="trailerCard flex">
                                <div className="imgbox">
                                    <img width={"100%"} height={"100%"} src={elem.link} alt={elem.title} />
                                </div>
                            </div>
                            <div className="aboutMovies">
                                <div>
                                    <div className="movieTitle">{elem.title}</div>
                                    <div className='movieReales flex'>
                                        <div className="movieType">{elem.type}</div>
                                        <div className="moviePG">{elem.pg}</div>
                                        <div className="movieTime">{elem.time}</div>
                                        <div className="movieYear">{elem.year}</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="Details flex">
                                        <h3>Details:</h3>
                                        <div className='flex'>
                                            <p className="key">Directed By:</p>
                                            <p className="value">{elem.directer}</p>
                                        </div>
                                        <div className='flex'>
                                            <p className="key">Accolades:</p>
                                            <p className="value">{elem.accolades}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='Plot'>
                                        <h3>Plot:</h3>
                                        <div className="value">{elem.plot}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ratting_div'>
                        <div className='movieScore flex flexbox'>
                            <div className="aboutTns">
                                <h3>Rating & Reviews</h3>
                                <div className='flex'>
                                    <div>
                                        <div className="tnsScore">{elem.tnsScore}</div>
                                        <h4>TNS Score</h4>
                                    </div>
                                    <div>
                                        <div className="UserRiview">{elem.userReviews}</div>
                                        <h4>User Reviews</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='buttonDiv flex flexbox'>
                                <h3>Quick options</h3>
                                <Button>
                                    <img height={"17px"} width={"17px"} src="frontend/public/image/play.svg" alt="" />
                                    <p>stream now</p>
                                </Button>
                                <ButtonSec>
                                    <img height={"17px"} width={"17px"} src="frontend/public/image/plus-large.svg" alt="" />
                                    <p>add to watchlist</p>
                                </ButtonSec>
                            </div>
                        </div>
                    </div>
                </div>
            </section>)}
            <CuratedSlider title={"Curated Lists Just For You"} />
        </Fragment>
    )
}
