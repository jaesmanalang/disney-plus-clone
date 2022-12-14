import { useEffect, useState, createRef, useRef } from 'react';
import { API_BASE_URL } from '../util/constants';
import Card from './Card';
import SkeletonCard from './SkeletonCard';
import Slider from 'react-slick';
import CustomArrow from './CustomArrow';
import useFetch from '../hooks/useFetch';

export default function RowCards({ title, fetchUrl }) {
  const { data, isLoading, error } = useFetch(fetchUrl);
  const prevEl = createRef();
  const nextEl = createRef();

  const settings = {
    slidesToShow: 6,
    centerMode: true,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow: <CustomArrow ref={prevEl} direction="prev" />,
    nextArrow: <CustomArrow ref={nextEl} direction="next" />,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          centerMode: false,
          arrows: false,
        },
      },
    ],
  };

  if (!data || data.length === 0) {
    return null;
  }

  function showArrows() {
    if (nextEl.current && prevEl.current) {
      nextEl.current.style.display = 'block';
      prevEl.current.style.display = 'block';
    }
  }

  function hideArrows() {
    if (nextEl.current && prevEl.current) {
      nextEl.current.style.display = 'none';
      prevEl.current.style.display = 'none';
    }
  }

  return (
    <div className="mb-8 pl-5 pr-5">
      <h4 className="text-lg md:text-3xl mb-3 font-semibold">{title}</h4>
      <div onMouseEnter={showArrows} onMouseLeave={hideArrows}>
        {!isLoading && data?.length > 0 && (
          <Slider {...settings}>
            {data.map((movie) => (
              <Card
                key={movie.id}
                id={movie.id}
                posterPath={movie.poster_path}
                originalTitle={movie.original_title}
              />
            ))}
          </Slider>
        )}
      </div>

      {isLoading && (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <div key={index}>
                <SkeletonCard />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
