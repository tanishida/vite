import { FC } from 'react';
import {ImageList, ImageListItem, Box, IconButton} from '@mui/material';
import { useSize } from '../hooks/useSize';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { OutImageDialog } from '../Dialogs/OutImageDialog';
import { useCards } from '../hooks/useCards';
import { useAppSelector } from '../../hooks/useAppSelector';
import SearchIcon from '@mui/icons-material/Search';
import CollectionsIcon from '@mui/icons-material/Collections';

export const OutputImage: FC = () => {
    const { height, width } = useSize();
    const dispatch = useAppDispatch()
    const {selectedCards, isLoading} = useCards();
    const selectedMultipleCategory = useAppSelector(({categories}) => categories.selectedMultipleCategory);
    if (!selectedCards) return <></>

  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
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
    <IconButton
      onClick={() => {
        if (selectedMultipleCategory) {
          dispatch(({cardsPage}) => cardsPage.deleteData());
          dispatch(({cardsPage}) => cardsPage.postMultiData(selectedMultipleCategory));
        }
      }}
      sx={{
        display: selectedMultipleCategory?.length === 0 || isLoading ? "none" : undefined,
        position: "fixed",
        bottom: "90%",
        left: "82%",
        color: "#000000",
        background: "#00FEBB",
        width: "60px",
        height: "60px",
    }}>
      <SearchIcon />
    </IconButton>
    <IconButton
      onClick={() => {
        dispatch(({cardsPage}) => cardsPage.setDialog(true));
      }}
      sx={{
        display: selectedCards.length === 0 ? "none" : undefined,
        position: "fixed",
        bottom: "5%",
        left: "5%",
        color: "#000000",
        background: "#00ff00",
        width: "60px",
        height: "60px",
    }}>
      <CollectionsIcon />
    </IconButton>
    <OutImageDialog />
    </Box>
  );
}
