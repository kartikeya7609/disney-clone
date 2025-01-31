import React from 'react';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function HrMovieCard({ movie }) {
  return (
    <section>
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        alt={movie.title}
        className="flex-shrink-0 w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer hover:scale-110 transition-all duration-150 ease-in object-cover"
      />
         <h2 className="relative">{movie.tittle}</h2>

    </section>

  );
}

export default HrMovieCard;