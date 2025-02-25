import { FC, useState, Fragment } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import CircularProgress from '@mui/material/CircularProgress';
import { useSize } from '../hooks/useSize';
import { useCategories } from '../hooks/useCategories';

export const Categories: FC = () => {
    const dispatch = useAppDispatch()
    const { textFieldWidth } = useSize();
    const categories = useCategories();

  return (
    <>
    <Autocomplete
      sx={{ maxWidth: textFieldWidth, minWidth: "360px", mb: 2, mt: 7}}
      disabled={categories.length === 0}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      getOptionLabel={(categories) => categories.name}
      options={categories}
      onChange={(_, value) => {
        if (!value) return;
        dispatch(({catogoriesPage}) => catogoriesPage.setSelected(value.value))
        }
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label={categories.length === 0 ? "カテゴリーを取得中" : "カテゴリーを選択"}
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: (
                <Fragment>
                  {categories.length === 0 ? <CircularProgress color="inherit" size={20} /> : null}
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