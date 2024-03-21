import React from 'react'
import "./Card.css"
import Button from '../buttons/Button'
import { Link } from 'react-router-dom'


const Card = ({index,Poster,Title,catagory,watch}) => {
    return (
        <>
            <div className="card "key={index}>
                <img height={"400px"} width={"400px"} src={Poster} alt="" />
                <div className='movieDetails'>
                    <span className='flex'>
                        <h4>{Title}</h4>
                        <img height={"30px"} src="frontend/public/image/TNS 1.svg" alt="" />
                    </span>
                    <span className='flex'>
                        <p>{catagory}</p>
                        <span className="number">{watch}</span>
                    </span>
                    <Button><Link to="/watchlist">+ Add to Watchlist</Link></Button>
                </div>
            </div>
        </>
    )
}

export default Card
