import { FC } from 'react';
import {ImageList, ImageListItem} from '@mui/material';
import { useSize } from '../hooks/useSize';

export const OutputImage: FC = () => {
    const { height, width } = useSize();

  return (
    <ImageList cols={3} rowHeight={height}>
      {itemDataMock.map((v, i) => (
        <ImageListItem sx={{height: height, width: width}} key={i}>
          <img
            src={v}
            alt={`card-${i + 1}`}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemDataMock = [
  "https://www.dbs-cardgame.com/fw/images/cards/card/jp/FB05-006_p1.webp",
  "https://www.dbs-cardgame.com/fw/images/cards/card/jp/FB04-006_p1.webp",
  "https://www.dbs-cardgame.com/fw/images/cards/card/jp/FB03-006.webp",
  "https://www.dbs-cardgame.com/fw/images/cards/card/jp/FB02-006.webp",
  "https://www.dbs-cardgame.com/fw/images/cards/card/jp/FB01-006.webp",
  "https://www.dbs-cardgame.com/fw/images/cards/card/jp/FB05-009_p1.webp",
  "https://www.dbs-cardgame.com/fw/images/cards/card/jp/FB02-007.webp",
  "https://www.dbs-cardgame.com/fw/images/cards/card/jp/FB01-008.webp",
  "https://www.dbs-cardgame.com/fw/images/cards/card/jp/FB05-012.webp"
];