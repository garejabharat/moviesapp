import React from 'react';
import { Menu, Button, Flex, rem } from '@mantine/core';
import { IconChevronRight, IconCaretDownFilled } from '@tabler/icons-react';
import { Link, useParams } from 'react-router-dom';
const PageDetails_Header: React.FC = () => {
  const { movieId } = useParams();
  return (
    <>
      <Flex direction={{ base: 'column', sm: 'row' }} gap={{ base: 'sm', sm: 'lg' }} justify={{ sm: 'center' }}>
        <Menu shadow='md' trigger='hover' openDelay={100} closeDelay={400} offset={1}>
          <Menu.Target>
            <Button
              bg={'white'}
              c={'dark'}
              rightSection={<IconCaretDownFilled style={{ width: rem(16), height: rem(16) }} />}
            >
              Overview
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Link to={`/${movieId}`} className='custom-link'>
              <Menu.Item>Main</Menu.Item>
            </Link>
            <Link to={`/${movieId}/title`} className='custom-link'>
              <Menu.Item>Alternative Titles</Menu.Item>
            </Link>
            <Link to={`/${movieId}/cast`} className='custom-link'>
              <Menu.Item>Cast & Crew</Menu.Item>
            </Link>
            <Menu.Item>Release Dates</Menu.Item>
            <Menu.Item>Translations</Menu.Item>
            <Menu.Item>watch Now</Menu.Item>
            <Menu.Item>Changes </Menu.Item>
            <Menu.Item>Report</Menu.Item>
            <Menu.Item>Edit</Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <Menu shadow='md' trigger='hover' openDelay={100} closeDelay={400} offset={1}>
          <Menu.Target>
            <Button
              bg={'white'}
              c={'dark'}
              rightSection={<IconCaretDownFilled style={{ width: rem(16), height: rem(16) }} />}
            >
              Media
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item>Backdrops</Menu.Item>
            <Menu.Item>Logos</Menu.Item>
            <Menu.Item>Posters </Menu.Item>
            <Menu.Item>
              <Menu position='right-start' offset={6} trigger='hover' openDelay={100} closeDelay={400} withArrow>
                <Menu.Target>
                  <Button bg={'white'} c={'dark'} m={0} rightSection={<IconChevronRight />}>
                    Videos
                  </Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item>Featurettes</Menu.Item>
                  <Menu.Item>Clips</Menu.Item>
                  <Menu.Item>Trailer </Menu.Item>
                  <Menu.Item>Teasers </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <Menu shadow='md' trigger='hover' openDelay={100} closeDelay={400} offset={1}>
          <Menu.Target>
            <Button
              bg={'white'}
              c={'dark'}
              rightSection={<IconCaretDownFilled style={{ width: rem(16), height: rem(16) }} />}
            >
              Fandom
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item>
              <Menu position='right-start' offset={6} trigger='hover' openDelay={100} closeDelay={400} withArrow>
                <Menu.Target>
                  <Button bg={'white'} c={'dark'} m={0} rightSection={<IconChevronRight />}>
                    Discussions
                  </Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item>Overview</Menu.Item>
                  <Menu.Item>General</Menu.Item>
                  <Menu.Item>Content Issues </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Menu.Item>
            <Menu.Item>Reviews </Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <Menu shadow='md' trigger='hover' openDelay={100} closeDelay={400} offset={1}>
          <Menu.Target>
            <Button
              bg={'white'}
              c={'dark'}
              rightSection={<IconCaretDownFilled style={{ width: rem(16), height: rem(16) }} />}
            >
              Share
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item>Share Link</Menu.Item>
            <Menu.Item>Facebook</Menu.Item>
            <Menu.Item>Tweet</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Flex>
    </>
  );
};

export default PageDetails_Header;
