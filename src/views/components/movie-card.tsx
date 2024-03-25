import React from 'react';

interface MovieCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="flex flex-col min-w-[350px] max-w-[350px]">
      <img src={imageUrl} alt={title} className="w-full h-auto object-cover" />
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default MovieCard;