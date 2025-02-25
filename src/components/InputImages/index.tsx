import { FC } from 'react';
import { Categories } from '../Categories';
import { CardList } from '../CardList';
import { Box } from '@mui/material';

export const InputImages: FC = () => {

  return (
    <Box>
      <Categories />
      <CardList />
    </Box>
  );
}