import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useAppSelector } from '../../hooks/useAppSelector';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch } from '../../hooks/useAppDispatch';

export const OutImageDialog = () => {
  const { outImageDialog } = useAppSelector(({cards}) => cards);
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(({cardsPage}) => cardsPage.setDialog(false));
  };

  return (
      <Dialog
        fullScreen
        open={outImageDialog ?? false}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle>{"画像"}</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>閉じる</Button>
        </DialogActions>
      </Dialog>
  );
}
