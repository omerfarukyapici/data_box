import React from 'react'
import '../Style/Movies.scss';

interface IMovieProps {
    movieName?: string,
    movieİmdb?: number,
    movieİmg?: string
}

export const MovieCard = (
    {movieName, movieİmdb, movieİmg}: IMovieProps 
) => {
    return (
        <div className='M-card'>
            <div className='Movie-C'>
                <div className='img-p'>
                    <img src={movieİmg} alt='' />
                </div>
                <div className='movie-divs'>
                    <div> {movieName} </div>
                    <div>İMDB : {movieİmdb} </div>
                    <button>Watch</button>
                </div>
            </div>
        </div>
    );
}
