import React from 'react';
import { Container, Box, Text, Group, Grid, Tabs, BackgroundImage } from '@mantine/core';
import TrendingCard from './TrendingCard';
import { SingleCardItem, moviesType } from '../utils';
interface TrendingMoviesType {
  Trending: string[];
  TrendingTitle: string;
  activeTabForTrending: string;
  setActiveTabForTrending: React.Dispatch<React.SetStateAction<string>>;
  data: moviesType | undefined;
}
const TrendingMovies: React.FC<TrendingMoviesType> = ({
  Trending,
  TrendingTitle,
  activeTabForTrending,
  setActiveTabForTrending,
  data,
}) => {
  return (
    <>
      <div className='main-TrendingMovies'>
        <BackgroundImage src='../assert/images/trending.svg'>
          <Box my='xl' className='moviesDetails-box'>
            <Group mt='md' mb='xs'>
              <Text fw={500} size='lg' style={{ paddingLeft: '10%' }}>
                {TrendingTitle}
              </Text>
              <div className='trendingMovies-tab'>
                <Tabs
                  color='#032541'
                  variant='pills'
                  radius='lg'
                  value={activeTabForTrending}
                  onChange={(value) => setActiveTabForTrending(value || '')}
                >
                  <Tabs.List>
                    {Trending.map((TrendingTitle) => (
                      <Tabs.Tab key={TrendingTitle} value={TrendingTitle} className='Trending-title'>
                        {TrendingTitle === 'day' ? 'Today' : TrendingTitle}
                      </Tabs.Tab>
                    ))}
                  </Tabs.List>
                </Tabs>
              </div>
            </Group>

            <Container>
              <Grid>
                {data?.results.map((cardItem: SingleCardItem) => (
                  <Grid.Col span={2} key={cardItem.id}>
                    <TrendingCard cardItem={cardItem} />
                  </Grid.Col>
                ))}
              </Grid>
            </Container>
          </Box>
        </BackgroundImage>
      </div>
    </>
  );
};

export default TrendingMovies;
