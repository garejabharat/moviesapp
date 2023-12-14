import { Box, Container, Title } from '@mantine/core';
import React from 'react';
import HeaderForDetailsPages from './HeaderForDetailsPages';
import { useParams } from 'react-router-dom';

const Alternative_Title: React.FC = () => {
  const { moviesId } = useParams();
  console.log(moviesId);
  // const { data } = useGetMoviesDetailsQuery(moviesId);
  return (
    <>
      <HeaderForDetailsPages />
      <Container>
        <Box>
          <Title bg={'dark'} py={15} px={5}>
            Alternative Titles{' '}
          </Title>
        </Box>
      </Container>
    </>
  );
};

export default Alternative_Title;
