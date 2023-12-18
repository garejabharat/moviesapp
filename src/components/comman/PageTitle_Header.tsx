import { Card, Flex, Image, Text } from '@mantine/core';
import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useGetMoviesDetailsQuery } from '../../redux/movie/movies';

const PageTitle_Header: React.FC = () => {
  const { movieId } = useParams();
  // console.log(movieId);
  const BASEURL = 'https://image.tmdb.org/t/p/w58_and_h87_face';

  const { data: movieDetailsData } = useGetMoviesDetailsQuery(Number(movieId));

  return (
    <>
      <Flex bg={'dark'}>
        <Card padding={'md'} bg={'dark'}>
          <Link to={'/'}>
            <Image
              src={`${BASEURL}${movieDetailsData?.poster_path}`}
              srcSet={`${BASEURL}${movieDetailsData?.poster_path}`}
              alt={movieDetailsData?.title}
            />
          </Link>
        </Card>
        <Flex align='center'>
          <Link to={'/'} className='custom-link '>
            <Text py={15} px={5} c={'white'} size='lg'>
              {movieDetailsData?.title} ({movieDetailsData?.release_date}) <br />
              <Text> Back to Main</Text>
            </Text>
          </Link>
        </Flex>
      </Flex>
      <Outlet />
    </>
  );
};

export default PageTitle_Header;
