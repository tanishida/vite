import { FC, Fragment } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import CircularProgress from '@mui/material/CircularProgress';
import { useSize } from '../hooks/useSize';
import { useCategories } from '../hooks/useCategories';
import { MenuItem, Chip } from '@mui/material';

export const MultipleCategories: FC = () => {
    const dispatch = useAppDispatch()
    const { textFieldWidth } = useSize();
    const {categories, selectedMultipleCategory} = useCategories();
  return (
    <>
      <Autocomplete
        sx={{ maxWidth: textFieldWidth, top: 0, zIndex: 1, mt: 2, margin: "20px"}}
        disabled={categories.length === 0}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        getOptionLabel={(category) => category.name}
        options={[{name: "全て", value: "all"}].concat(categories)}
        multiple
        disableCloseOnSelect
        noOptionsText={"見つかりません"}
        onChange={(_, value) => {
          if (!value) return;
          if (value.some((a) => a.value === "all")) {
            dispatch(({categoriesPage}) => categoriesPage.setSelectedMultipleData(categories))
            return;
          }
          dispatch(({categoriesPage}) => categoriesPage.setSelectedMultipleData(value.filter((a) => a.value !== "all")))
          }
        }
        renderOption={(props, option) => {
          if (selectedMultipleCategory?.some((a) => a.value === "all")) return;
          return (
            <MenuItem {...props} key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          )}}
        renderTags={(value, getTagProps) => {
          return value.map((option, index) => (
            <Chip {...getTagProps({index})} key={index} label={option.name} />
          ))
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