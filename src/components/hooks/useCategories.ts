import { useEffect, useMemo } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';

export const useCategories = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector(({categories}) => categories.categories);
  
    useEffect(() => {
        dispatch(({catogoriesPage}) => catogoriesPage.getData());
      }, [dispatch])
    
    return useMemo(() => categories, [categories]);
}