import React from 'react';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
  return (
    <div className="flex-shrink-0 w-[110px] md:w-[200px]">
      <div className="relative rounded-lg overflow-hidden hover:border-[3px] border-gray-400 cursor-pointer hover:scale-110 transition-all duration-150 ease-in">
        <img
          src={IMAGE_BASE_URL + movie.poster_path}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <h2 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white text-sm p-2 text-center">
          {movie.title} {/* Fixed typo: movie.tittle -> movie.title */}
        </h2>
      </div>
    </div>
  );
}

export default MovieCard;