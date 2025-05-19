import { useMemo } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';

export const useCards = () => {
    const {cards, selectedCards, isLoading, isOpen} = useAppSelector(({cards}) => cards);
    
    return {
      cards: useMemo(() => cards, [cards]),
      selectedCards: useMemo(() => selectedCards, [selectedCards]),
      isLoading: useMemo(() => isLoading, [isLoading]),
      isOpen: useMemo(() => isOpen, [isOpen]),
    };
}