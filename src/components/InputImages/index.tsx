import { FC } from 'react';
import { Categories } from '../Categories';
import { useCategories } from '../hooks/useCategories';

export const InputImages: FC = () => {
  const categories = useCategories();

  return (
    <>
      <Categories categories={categories} />
    </>
  );
}