import { FC } from 'react';
import { useDom } from '../hooks/useDom';

export const InputImages: FC = () => {
  useDom("https://www.dbs-cardgame.com/fw/jp/cardlist");
  return (
    <></>
  );
}