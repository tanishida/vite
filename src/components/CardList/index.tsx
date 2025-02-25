import { FC, useState, Fragment, useMemo } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import CircularProgress from '@mui/material/CircularProgress';
import { Chip, MenuItem } from '@mui/material';
import { useSize } from '../hooks/useSize';

export const CardList: FC = () => {
    const dispatch = useAppDispatch()
    const { textFieldWidth } = useSize();
    const cardsSelector = useAppSelector(({cards}) => cards.cards);
    const selectedCards = useAppSelector(({cards}) => cards.selectedCards);
    const selectedCategory = useAppSelector(({categories}) => categories.selectedCategory) ?? "";
    const categories = useAppSelector(({categories}) => categories.categories) ?? "";
    const [stateCategories, setStateCategories] = useState<string>("")
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const url = useMemo(() => `https://www.dbs-cardgame.com/fw/jp/cardlist/?search=true&category%5B0%5D=${selectedCategory}`, [selectedCategory])

    const handleOpen = () => {
      if (cardsSelector.length === 0 && selectedCategory) {
          setLoading(true);
          dispatch(({cardsPage}) => cardsPage.postData({url: url}));
      } else {
        setLoading(false);
      }
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <>
    <Autocomplete
      open={open}
      sx={{maxWidth: textFieldWidth, minWidth: "360px", mb: 2}}
      limitTags={9}
      disableCloseOnSelect
      disabled={categories.length === 0 || selectedCategory === ""}
      onOpen={handleOpen}
      onClose={handleClose}
      isOptionEqualToValue={(option, value) => 
        option.url === value.url
      }
      onChange={(_, value) => 
        dispatch(({cardsPage}) => cardsPage.setSelectedData(value))
        
      }
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => {
          const { key, ...tagProps } = getTagProps({ index });
          return (
            <Chip
            {...tagProps}
              key={key}
              label={option.name}
            />
          );
        })
      }
      getOptionLabel={(cardsSelector) => cardsSelector.name}
      options={cardsSelector}
      loading={loading}
      multiple
      renderOption={(props, option, {selected}) => (
        <MenuItem {...props} disabled={!selected && selectedCards && selectedCards?.length >= 9} key={props.key + option.url}>
          {option.name}
        </MenuItem>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="カードを選択（最大９枚まで）"
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: (
                <Fragment>
                  {loading && cardsSelector.length === 0 ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </Fragment>
              ),
            },
          }}
        />
      )}
    />
    </>
  );
}