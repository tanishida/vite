import { FC, Fragment } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import CircularProgress from '@mui/material/CircularProgress';
import { Chip, MenuItem } from '@mui/material';
import { useSize } from '../hooks/useSize';
import { useCards } from '../hooks/useCards';
import { useAppSelector } from '../../hooks/useAppSelector';

export const CardList: FC = () => {
    const dispatch = useAppDispatch()
    const { textFieldWidth } = useSize();
    const {cards, selectedCards, isLoading, isOpen} = useCards();
    const categories = useAppSelector(({categories}) => categories.categories);
    const selectedMultipleCategory = useAppSelector(({categories}) => categories.selectedMultipleCategory);

  return (
    <>
    <Autocomplete
      open={isOpen}
      sx={{maxWidth: textFieldWidth, top: 0, zIndex: 1, margin: "20px"}}
      limitTags={9}
      disableCloseOnSelect
      disabled={selectedMultipleCategory?.length === 0 || categories.length === 0 || isLoading}
      noOptionsText={"見つかりません"}
      isOptionEqualToValue={(option, value) => 
        option.url === value.url
      }
      onOpen={() => dispatch(({cardsPage}) => cardsPage.setOpen(true))}
      onClose={() => dispatch(({cardsPage}) => cardsPage.setOpen(false))}
      onChange={(_, value) => 
        dispatch(({cardsPage}) => cardsPage.setSelectedData(value))
        
      }
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => {
          const { key, ...tagProps } = getTagProps({ index });
          if (selectedCards?.length === 0) return;
          return (
            <Chip
            {...tagProps}
              key={key}
              label={option.name}
            />
          );
        })
      }
      value={selectedCards}
      getOptionLabel={(cardsSelector) => cardsSelector.name}
      options={cards}
      loading={isLoading}
      multiple
      renderOption={(props, option, {selected, index}) => (
        <MenuItem 
          {...props} 
          disabled={!selected && selectedCards && selectedCards?.length >= 9} 
          key={index}
        >
          {option.name}
        </MenuItem>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={isLoading ? "検索中..." : "カードを選択（最大９枚まで）"}
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: (
                <Fragment>
                  {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
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