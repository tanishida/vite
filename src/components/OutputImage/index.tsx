import { FC } from 'react';
import {ImageList, ImageListItem, Box, Button} from '@mui/material';
import { useSize } from '../hooks/useSize';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';

export const OutputImage: FC = () => {
    const { height, width, displayWidthPattern } = useSize();
    const dispatch = useAppDispatch()
    const selectedCards = useAppSelector(({cards}) => cards.selectedCards);

    if (!selectedCards) return <></>

  return (
    <Box>
    <ImageList sx={{}} cols={3}>
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
    <Button
      sx={{
        display: selectedCards.length === 0 ? "none" : undefined,
        position: "fixed",
        bottom: "1%",
        right: displayWidthPattern === "xs" ? "2%" : "10%",
        color: "#000000",
        background: "#00ff00"
    }}>{"生成"}</Button>
    </Box>
  );
}
