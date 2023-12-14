import { Card, Image, RingProgress, Text } from '@mantine/core';
import { SingleCardItem } from '../utils';
import { Link } from 'react-router-dom';

interface TrendingCardPropsType {
  cardItem: SingleCardItem;
}

function TrendingCard({ cardItem }: TrendingCardPropsType) {
  // const linkProps = { href: 'https://mantine.dev', target: '_blank', rel: 'noopener noreferrer' };

  const IMAGE_BASE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
  const progressData = Math.round(cardItem.vote_average * 10);
  const progressColor = progressData < 70 ? 'yellow' : 'blue';
  // const params_title = cardItem?.original_title?.split(' ').join('-');
  // console.log(params_title);

  return (
    <div style={{ maxWidth: '100%', margin: '0 auto' }}>
      <Card radius='md' className='card'>
        <Card.Section className=''>
          <div className='card-Image'>
            <Link to={`${cardItem.id}`}>
              <Image src={`${IMAGE_BASE_URL}${cardItem.poster_path}`} />
            </Link>
          </div>
        </Card.Section>
        <RingProgress
          size={45}
          thickness={3}
          className='trending-progress'
          sections={[{ value: progressData, color: progressColor }]}
          label={
            <Text>
              {progressData}
              <sup className='ringProgress-percentage'> %</sup>
            </Text>
          }
        />
        <Link to={`${cardItem.id}`} className='trending-title'>
          <Text tt='capitalize' fw={700} size='sm'>
            {cardItem.title}{' '}
          </Text>
        </Link>
        <Text size='sm'>
          {new Date(cardItem.release_date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </Text>
      </Card>
    </div>
  );
}
export default TrendingCard;
