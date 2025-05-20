import { FC } from 'react';
import { Box, IconButton} from '@mui/material';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { OutImageDialog } from '../Dialogs/OutImageDialog';
import { useCards } from '../hooks/useCards';
import { useAppSelector } from '../../hooks/useAppSelector';
import SearchIcon from '@mui/icons-material/Search';
import CollectionsIcon from '@mui/icons-material/Collections';
import { OutImageList } from './OutImageList';

export const OutputImage: FC = () => {
  const dispatch = useAppDispatch()
  const {selectedCards, isLoading} = useCards();
  const selectedMultipleCategory = useAppSelector(({categories}) => categories.selectedMultipleCategory);

  if (!selectedCards) return <></>;
  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
    <OutImageList />
    <Box sx={{mt: 20}} />
    <IconButton
      onClick={() => {
        dispatch(({cardsPage}) => cardsPage.setOpen(false))
        dispatch(({cardsPage}) => cardsPage.setDialog(true));
      }}
      sx={{
        display: selectedCards.length === 0 ? "none" : undefined,
        position: "fixed",
        bottom: "5%",
        left: "80%",
        color: "#000000",
        background: "#00ff00",
        width: "60px",
        height: "60px",
    }}>
      <CollectionsIcon />
    </IconButton>
    <IconButton
      onClick={() => {
        if (selectedMultipleCategory) {
          dispatch(({cardsPage}) => cardsPage.deleteData());
          dispatch(({cardsPage}) => cardsPage.postMultiData(selectedMultipleCategory));
        }
      }}
      sx={{
        display: selectedMultipleCategory === undefined || selectedMultipleCategory?.length === 0 || isLoading ? "none" : undefined,
        position: "fixed",
        bottom: selectedCards.length === 0 ? "5%" : "15%",
        left: "80%",
        color: "#000000",
        background: "#00FEBB",
        width: "60px",
        height: "60px",
    }}>
      <SearchIcon />
    </IconButton>
    <OutImageDialog />
    </Box>
  );
}
