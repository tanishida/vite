import { FC } from 'react';
import {ImageList, ImageListItem, } from '@mui/material';
import { useSize } from '../hooks/useSize';
import { useCards } from '../hooks/useCards';

type Props = {
  isDialog?: boolean;
}

export const OutImageList: FC<Props> = ({isDialog}) => {
  const { height, width } = useSize();
  const {selectedCards} = useCards();
    
  if (!selectedCards) return <></>;
  return (
    <ImageList cols={3} sx={{height: isDialog ? "100%" : "auto", overflowY: "hidden"}}>
      {selectedCards.map((v, i) => (
        <ImageListItem sx={{height: height, width: width}} key={i}>
          <img
            src={v.url}
            alt={`card-${i + 1}`}
            loading="lazy"
            onClick={() => window.open(v.url)}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
