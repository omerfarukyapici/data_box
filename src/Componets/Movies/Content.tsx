import React from 'react'
import { MovieCard } from './MovieCard'
import '../Style/Movies.scss';

import Movie from '../img/movie.jpg';
import MovieTwo from '../img/movie-2.jpg';
import MovieThree from '../img/movie-3.jpg';
import MovieFour from '../img/movie-4.jpg';


export const Content = () => {
  return (
    <div className='M-p'>
      <div className='M-c'>
        
        <MovieCard
          movieİmg={Movie}
          movieName='Free Guy'
          movieİmdb={7.2}
        />
        <MovieCard
          movieİmg={MovieTwo}
          movieName='Dune'
          movieİmdb={8.1}
        />
        <MovieCard
          movieİmg={MovieThree}
          movieName='The Suicide Squad'
          movieİmdb={7.2}
        />
        <MovieCard
          movieİmg={MovieFour}
          movieName='Red Notice'
          movieİmdb={6.3}
        />

      </div>
    </div>
  )
}
