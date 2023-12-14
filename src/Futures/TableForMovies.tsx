import { Avatar, Table, Group, Text } from '@mantine/core';
const data = [
  {
    avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    name: 'Robert Wolfkisser',
    job: 'Engineer',
    email: 'rob_wolf@gmail.com',
    rate: 22,
  },
];
export const rows = data.map((item) => (
  <Table.Tr key={item.name}>
    <Table.Td>
      <Group gap='sm'>
        <Avatar size={40} src={item.avatar} radius={40} />
        <div>
          <Text fz='sm' fw={500}>
            Disappointing
          </Text>
        </div>
      </Group>
    </Table.Td>
    <Table.Td>
      <Text fz='sm'>open</Text>
    </Table.Td>
    <Table.Td>
      <Text fz='sm'>8</Text>
    </Table.Td>
    <Table.Td>
      <Text fz='sm'>Dec 08, 2023 at 8:03 PM</Text>
      <Text>by RockySullivan</Text>
    </Table.Td>
  </Table.Tr>
));
