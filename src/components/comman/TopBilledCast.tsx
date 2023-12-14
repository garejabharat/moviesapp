import { Card, Image, Text } from '@mantine/core';
import React from 'react';

const TopBilledCast: React.FC = () => {
  return (
    <>
      <Card shadow='md' radius='md' padding='xl' my={5} w={138}>
        <Card.Section>
          <Image
            h={175}
            src='https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'
            alt='No way!'
          />
        </Card.Section>

        <Text fw={500} size='xs'>
          Cillian Murphy
        </Text>
        <Text size='xs'>J. Robert Oppenheimer</Text>
      </Card>
    </>
  );
};

export default TopBilledCast;
