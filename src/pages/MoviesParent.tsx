import React, { useState } from 'react';
import TrendingMovies from '../components/TrendingMovies';
import { useGetTrendingMoviesQuery } from '../redux/movie/movies';

const Trending = ['day', 'week'];
// const Whats_Popular = ['Streaming', 'TV', 'For_Rent', 'In_Theaters'];
const MoviesParent: React.FC = () => {
  const [activeTabForTrending, setActiveTabForTrending] = useState<string>('day');
  const { data } = useGetTrendingMoviesQuery(activeTabForTrending);

  return (
    <>
      <TrendingMovies
        Trending={Trending}
        TrendingTitle={'Trending'}
        activeTabForTrending={activeTabForTrending}
        setActiveTabForTrending={setActiveTabForTrending}
        data={data}
      />
    </>
  );
};

export default MoviesParent;
