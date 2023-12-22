import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  useGetMoviesCreditsQuery,
  useGetMoviesDetailsQuery,
  useGetMoviesKeywordsQuery,
  useGetReviewsQuery,
} from '../redux/movie/movies';
import {
  Avatar,
  BackgroundImage,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Flex,
  Grid,
  GridCol,
  Group,
  Image,
  List,
  Loader,
  Paper,
  RingProgress,
  Space,
  Tabs,
  Text,
  Title,
  Tooltip,
  TypographyStylesProvider,
  rem,
  Table,
} from '@mantine/core';
import {
  IconListCheck,
  IconHeartFilled,
  IconBookmarkFilled,
  IconStarFilled,
  IconPlayerPlayFilled,
  IconBrandGooglePlay,
} from '@tabler/icons-react';
import './moviesDetail.css';
import { CastCreditCrew, Genre, TMDBReview } from '../utils';
import { IconCirclesRelation } from '@tabler/icons-react';
import TopBilledCarousel from '../components/comman/TopBilledCarousel';
import classes from '../assets/css/CommentHtml.module.css';
import { rows } from '../Futures/TableForMovies';

const MovieDetails: React.FC = () => {
  const [reviewsFilteredData, setReviewsFilteredData] = useState<TMDBReview[] | null>(null);
  const { movieId } = useParams();
  const movieIdNumber = Number(movieId);
  const { data: movieDetailsData, isLoading: movieDetailsIsLoading } = useGetMoviesDetailsQuery(movieIdNumber);
  const { data: crewDetailsData, isLoading: crewDetailsIsLoading } = useGetMoviesCreditsQuery(movieIdNumber);
  const { data: moviesKeyWords } = useGetMoviesKeywordsQuery(movieIdNumber);
  const { data: moviesReviews } = useGetReviewsQuery(movieIdNumber);

  const directorOrWriterFilter = crewDetailsData?.crew.filter((Castjob: CastCreditCrew) => {
    return ['Director', 'Writing', 'Characters'].includes(Castjob.job);
  });

  useEffect(() => {
    if (moviesReviews) {
      const reviewsFiltered = [...moviesReviews.results];
      
      setReviewsFilteredData(reviewsFiltered.slice(0, 1));
    }
  }, [moviesReviews]);

  const progressData = Math.round((movieDetailsData?.vote_average ?? 0) * 10);
  const progressColor = progressData < 70 ? 'green' : 'blue';
  const BASEURL = 'https://image.tmdb.org/t/p/original';

  if (movieDetailsIsLoading && crewDetailsIsLoading) {
    return <Loader color='blue' size={50} />;
  }
  const getTimeReadout = (m: number | undefined): string | undefined => {
    if (m) {
      let a = [Math.floor(m / 60), Math.floor(m % 60)];
      return a.map((t) => ('0' + t).slice(-2)).join(':');
    }
  };

  return (
    <>
      <BackgroundImage src={`${BASEURL}${movieDetailsData?.poster_path}`} className='paster_background_image'>
        <Container size='xl' py={10} mt='md'>
          <Grid gutter='xs'>
            <Grid.Col span={4}>
              <Space>
                <Image radius='md' h={450} w={300} src={`${BASEURL}${movieDetailsData?.poster_path}`} />
              </Space>
            </Grid.Col>
            <Grid.Col span={8}>
              <Container p='lg' c={'white'}>
                <Title order={2} size='h2' c={'white'}>
                  {movieDetailsData?.original_title}
                </Title>
                <Badge variant='outline' size='md' radius='xs' color='gray' ml={'sm'}>
                  12
                </Badge>
                <Text className='movies-list-link' ml={'sm'} c={'white'}>
                  {movieDetailsData?.release_date}
                </Text>{' '}
                {movieDetailsData?.genres.map((items: Genre) => (
                  <Text key={items.name} className='movies-list-link' c={'white'} ml={'sm'}>
                    {items.name}
                    {' ,'}
                  </Text>
                ))}
                <Text size='lg' className='movies-list-link'>
                  {getTimeReadout(movieDetailsData?.runtime)}h
                </Text>
              </Container>
              <Box className='moviesDetails-user-score'>
                <Avatar color='white' radius='xl' ml={'sm'} size={'lg'} bg={'black'}>
                  <RingProgress
                    size={60}
                    bg={'black'}
                    c={'white'}
                    thickness={3}
                    className='moviesDetail-progress'
                    sections={[{ value: progressData, color: progressColor }]}
                    label={
                      <Text>
                        {progressData}
                        <sup> %</sup>
                      </Text>
                    }
                  />
                </Avatar>
                <Text c={'white'}>
                  user
                  <br /> Score
                </Text>
                <Tooltip label='Add to list' position='bottom'>
                  <Avatar color='white' radius='xl' ml={'sm'} size={'lg'} bg={'black'}>
                    <IconListCheck size='1.5rem' />
                  </Avatar>
                </Tooltip>
                <Tooltip label='Mark as Favorite' position='bottom'>
                  <Avatar color='white' radius='xl' ml={'sm'} size={'lg'} bg={'black'}>
                    <IconHeartFilled size='1.5rem' />
                  </Avatar>
                </Tooltip>
                <Tooltip label='Add to your wishlist' position='bottom'>
                  <Avatar color='white' radius='xl' ml={'sm'} size={'lg'} bg={'black'}>
                    <IconBookmarkFilled size='1.5rem' />
                  </Avatar>
                </Tooltip>
                <Tooltip label='Rate it' position='bottom'>
                  <Avatar color='white' radius='xl' ml={'sm'} size={'lg'} bg={'black'}>
                    <IconStarFilled size='1.5rem' />
                  </Avatar>
                </Tooltip>

                <Title c={'white'} ml={'sm'}>
                  {' '}
                  <IconPlayerPlayFilled size='1.5rem' /> Play Trailer
                </Title>
              </Box>
              <Space h='lg' />
              <Text fs='italic' size='xl' c={'white'}>
                {movieDetailsData?.tagline}
              </Text>
              <Space h={'sm'} />
              <Title order={2} c={'white'}>
                Overview
              </Title>
              <Text c={'white'} my={'sm'}>
                {movieDetailsData?.overview}
              </Text>
              <Grid>
                {directorOrWriterFilter?.map((crewItem: any) => (
                  <Grid.Col span={4} key={crewItem.id}>
                    <List listStyleType='none' c={'white'}>
                      <List.Item fw={500}>{crewItem.name}</List.Item>
                      <List.Item>{crewItem.job}</List.Item>
                    </List>
                  </Grid.Col>
                ))}
              </Grid>
            </Grid.Col>
          </Grid>
        </Container>
      </BackgroundImage>

      <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} grow mx={25} my={10}>
        <GridCol span={8}>
          <Title order={1} ml={15} my={15} fz={25} fw={100}>
            Top Billed Cast
          </Title>

          <TopBilledCarousel movieIdNumber={movieIdNumber} />
          <Box my={15}>
            <Title order={4}>Full Cast & Crew</Title>

            <Divider my='md' />
            <Flex gap={'md'}>
              <Title order={3}> Social</Title>
              <Tabs ml={10} radius='lg' defaultValue='reviews'>
                <Tabs.List>
                  <Tabs.Tab value='reviews '>Reviews {moviesReviews?.total_results}</Tabs.Tab>
                  <Tabs.Tab value='settings'> Discussions 12</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value='reviews' my={10}>
                  {reviewsFilteredData?.map((reviewItem) => (
                    <Paper withBorder radius='md' key={reviewItem.id}>
                      <Group>
                        <Avatar
                          src={`${BASEURL}${reviewItem.author_details.avatar_path}`}
                          alt='Jacob Warnhalter'
                          radius='xl'
                        />
                        <div>
                          <Text fz='md' fw={600}>
                            A review by {reviewItem.author_details.name}
                          </Text>
                          <div style={{ display: 'flex' }}>
                            <Text fz='sm' bg={'dark'} c={'white'} p={0} px={2} m={0}>
                              * {reviewItem.author_details.rating}.0
                            </Text>
                            <Text fz='xs' c='dimmed' px={7}>
                              Written by {reviewItem.author_details.name} on {reviewItem.created_at}
                            </Text>
                          </div>
                        </div>
                      </Group>
                      <TypographyStylesProvider className={classes.body}>
                        <div
                          className={classes.content}
                          dangerouslySetInnerHTML={{
                            __html: `${reviewItem.content.slice(0, 300)}...`,
                          }}
                        />
                      </TypographyStylesProvider>
                    </Paper>
                  ))}
                  <Link to={'/'}>
                    <Title order={4}>Read All Reviews</Title>
                  </Link>
                </Tabs.Panel>

                <Tabs.Panel value='settings' my={10}>
                  {' '}
                  <Table verticalSpacing='md' horizontalSpacing='xl'>
                    <Table.Tbody>{rows}</Table.Tbody>
                  </Table>
                  <Link to={'/'}>
                    <Text size='lg'>Go to Discussions</Text>
                  </Link>
                </Tabs.Panel>
              </Tabs>
            </Flex>
          </Box>
        </GridCol>

        <GridCol span={4}>
          <Box my={35}>
            <Flex gap={15}>
              <Tooltip arrowSize={4} label='Visit JustWatch' withArrow>
                <IconBrandGooglePlay style={{ width: rem(40), height: rem(46) }} />
              </Tooltip>
              <Tooltip arrowSize={4} label='Visit Homepage' withArrow>
                <IconCirclesRelation style={{ width: rem(40), height: rem(46) }} />
              </Tooltip>
            </Flex>

            <Title order={4} mt={20}>
              Original Title
            </Title>
            <Text>{movieDetailsData?.original_title}</Text>

            <Title order={4} mt={20}>
              Status
            </Title>
            <Text>{movieDetailsData?.status}</Text>
            <Title order={4} mt={20}>
              Original Language
            </Title>
            <Text>{movieDetailsData?.original_language.toUpperCase()}</Text>
            <Title order={4} mt={20}>
              Budget
            </Title>
            <Text>${movieDetailsData?.budget}</Text>
            <Title order={4} mt={20}>
              Revenue
            </Title>
            <Text>${movieDetailsData?.revenue}</Text>
            <Title order={4} mt={20}>
              Keywords
            </Title>
            <Text>
              {moviesKeyWords?.keywords.map((item) => (
                <Button variant='default' key={item.id} m={5}>
                  {item.name}
                </Button>
              ))}
            </Text>
          </Box>
          <Divider my='md' />
          <Title order={4}>Content Score </Title>
          <Card>
            <Card.Section bg={'black'} c={'white'}>
              <Title order={4} p={10}>
                100
              </Title>
            </Card.Section>
            <Card.Section>
              <Text py={4} px={6} size='sm'>
                Yes! Looking good!
              </Text>
            </Card.Section>
          </Card>
          <Box size='xs' my={25}>
            <Title order={4}>Top Contributors</Title>
            <Flex mt={20} gap={'sm'}>
              <Avatar color='cyan' radius='xl' size={'lg'}>
                Mk
              </Avatar>
              <Box>
                <Title order={4}>351</Title>
                <Text size='md'>raze464</Text>
              </Box>
            </Flex>
          </Box>
        </GridCol>
      </Grid>
    </>
  );
};

export default MovieDetails;
