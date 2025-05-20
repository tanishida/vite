import { FC } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { useAppSelector } from '../../hooks/useAppSelector';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { OutImageList } from '../OutputImage/OutImageList';
import { Box, Card, Typography } from '@mui/material';

export const OutImageDialog: FC = () => {
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
        <DialogContent sx={{padding: "20px 10px"}}>
          <Card variant='outlined' sx={{ mt: 3 }}>
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
              <OutImageList />
            </Box>
          </Card>
          <Box>
            <Typography variant="body2" sx={{textAlign: "center", mt: 2}}>
              この画面をスクリーンショット ＆ トリミングして、<br/>画像を保存してください。
            </Typography>
            <Typography variant="body2" sx={{textAlign: "center", mt: 2}}>
              画像をクリックすると、元の画像が表示されます。
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
  );
}
