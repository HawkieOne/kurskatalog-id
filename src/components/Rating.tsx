import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { maxRating } from '../shared/constants';

interface RatingProps {
    rating: number;
}
export default function Rating({ rating }: RatingProps) {
    const starsFull = Math.floor(rating);
    const starsHalf = rating - starsFull;
    const emptyStars = Math.floor(maxRating - rating);
  return (
    <div className="flex space-x-2 text-pink">
        {Array.from(Array(starsFull).keys()).map((_, index) => (
            <BsStarFill size="1.25em" key={index}/>
        ))}
        {starsHalf > 0 && (
            <BsStarHalf size="1.25em" />
        )}
        {Array.from(Array(emptyStars).keys()).map((_, index) => (
            <BsStar size="1.25em" key={index}/>
        ))}
    </div>
  )
}
