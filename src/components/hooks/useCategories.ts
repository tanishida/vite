import { useEffect, useMemo } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';

export const useCategories = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector(({categories}) => categories.categories);
    const selectedMultipleCategory = useAppSelector(({categories}) => categories.selectedMultipleCategory);
  
    useEffect(() => {
      if (categories.length > 0) return;
      dispatch(({categoriesPage}) => categoriesPage.getData());
    }, [dispatch, categories]);
    
    return {
      categories: useMemo(() => categories, [categories]),
      selectedMultipleCategory: useMemo(() => selectedMultipleCategory, [selectedMultipleCategory]),
    };
}