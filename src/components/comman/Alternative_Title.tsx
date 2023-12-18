import { Card, Flex, Grid, Title, Text, Box, NavLink, Badge, Table } from '@mantine/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetAlternateTitleQuery } from '../../redux/movie/movies';
import { AlternateTitles } from '../../utils';

const Alternative_Title: React.FC = () => {
  const { movieId } = useParams();
  const { data: movieAlternateData } = useGetAlternateTitleQuery(Number(movieId));
  console.log(movieAlternateData);

  return (
    <>
      <Box p={15}>
        <Grid>
          <Grid.Col span={4}>
            <Card shadow='sm' radius='lg' withBorder>
              <Card.Section>
                <Flex
                  justify={'space-around'}
                  align={'center'}
                  bg={'dark'}
                  c={'white'}
                  direction={{ base: 'column', sm: 'row' }}
                >
                  <Title order={3} p={15}>
                    Alternate Tile{' '}
                  </Title>
                  <Text>{movieAlternateData?.titles.length}</Text>
                </Flex>
              </Card.Section>
              <Card.Section m={5}>
                {movieAlternateData?.titles.map((country_name: AlternateTitles) => (
                  <NavLink
                    key={country_name.iso_3166_1}
                    href='#required-for-focus'
                    label={country_name.title}
                    rightSection={
                      <Badge size='xl' p={2} radius='sm' variant='light' color='dark'>
                        {/* {(country_name[country_name.iso_3166_1] || 0) + 1} */}51
                      </Badge>
                    }
                  />
                ))}
              </Card.Section>
            </Card>
          </Grid.Col>
          <Grid.Col span={8}>
            <Card shadow='sm' radius='md' withBorder>
              <Card.Section p={10} bg={'#ECECEC'}>
                <Text fw={500}>Brazil</Text>
              </Card.Section>
              <Card.Section px={10} py={5}>
                <Table>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Title</Table.Th>
                      <Table.Th>Type</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>#ECECEC</Table.Tbody>
                </Table>
              </Card.Section>
            </Card>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
};

export default Alternative_Title;
