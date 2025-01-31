import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';

function MovieList({ genreId, index_ }) {
  const [MovieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    getMovieByGenreId();
  }, [genreId]);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const slideRight = () => {
    if (elementRef.current) {
      elementRef.current.scrollBy({
        left: 500, // Scroll by 500px to the right
        behavior: 'smooth', // Smooth scrolling
      });
    }
  };

  const slideLeft = () => {
    if (elementRef.current) {
      elementRef.current.scrollBy({
        left: -500, // Scroll by 500px to the left
        behavior: 'smooth', // Smooth scrolling
      });
    }
  };

  return (
    <div className='relative'>
      {/* Left Chevron */}
      <IoChevronBackOutline
        onClick={slideLeft}
        className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute ${
          index_ % 3 === 0 ? 'mt-[80px]' : 'mt-[150px]'
        }`}
      />

      {/* Movie List Container */}
      <div
        ref={elementRef}
        className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-4 px-3 pb-4'
      >
        {MovieList.map((item) => (
          <div key={item.id} className="flex-shrink-0">
            {index_ % 3 === 0 ? (
              <HrMovieCard movie={item} />
            ) : (
              <MovieCard movie={item} />
            )}
          </div>
        ))}
      </div>

      {/* Right Chevron */}
      <IoChevronForwardOutline
        onClick={slideRight}
        className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0 ${
          index_ % 3 === 0 ? 'mt-[80px]' : 'mt-[150px]'
        }`}
      />
    </div>
  );
}

export default MovieList;