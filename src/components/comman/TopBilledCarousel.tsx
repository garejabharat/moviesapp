import React, { useCallback, useEffect, useState } from 'react';
import { Carousel, Embla } from '@mantine/carousel';
import { Grid, Progress } from '@mantine/core';
import '@mantine/carousel/styles.css';
import { useGetMoviesCreditsQuery } from '../../redux/movie/movies';
import TopBilledCast from './TopBilledCast';

interface TopBilledCarouselType {
  movieIdNumber: number;
}

const TopBilledCarousel: React.FC<TopBilledCarouselType> = ({ movieIdNumber }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);

  const { data } = useGetMoviesCreditsQuery(movieIdNumber);
  // console.log(data);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
    if (data) {
      const popularityFiltered = [...data?.cast];
      popularityFiltered.sort((a, b) => b.popularity - a.popularity);
    }
  }, [embla, data]);

  return (
    <>
      <Grid>
        <Carousel dragFree height={200} getEmblaApi={setEmbla} initialSlide={2} align={'center'}>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Carousel.Slide>
              <TopBilledCast />
            </Carousel.Slide>
            <Carousel.Slide>
              <TopBilledCast />
            </Carousel.Slide>
            <Carousel.Slide>
              <TopBilledCast />
            </Carousel.Slide>
            <Carousel.Slide>
              <TopBilledCast />
            </Carousel.Slide>
            <Carousel.Slide>
              <TopBilledCast />
            </Carousel.Slide>
            <Carousel.Slide>
              <TopBilledCast />
            </Carousel.Slide>
            <Carousel.Slide>
              <TopBilledCast />
            </Carousel.Slide>
            <Carousel.Slide>
              <TopBilledCast />
            </Carousel.Slide>
          </Grid.Col>
        </Carousel>
      </Grid>
      <Progress value={scrollProgress} maw={320} size='sm' mt='xl' mx='auto' />
    </>
  );
};

export default TopBilledCarousel;
