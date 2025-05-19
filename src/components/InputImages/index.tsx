import { FC } from 'react';
import { CardList } from '../CardList';
import { MultipleCategories } from '../MultipleCategories';
import { Box } from '@mui/material';

export const InputImages: FC = () => {

  return (
    <Box>
      <MultipleCategories />
      <CardList />
      
    </Box>
  );
}