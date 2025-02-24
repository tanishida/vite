import { FC, useState } from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

type Detail = {
    name: string;
    value: string;
}

type Props = {
    categories: Detail[]
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const getStyles = (name: string, personName: readonly string[], theme: Theme) => {
    return {
      fontWeight: personName.includes(name)
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
    };
  }

export const Categories: FC<Props> = ({categories}) => {
    const theme = useTheme();
    const [category, setCategory] = useState<string[]>([]);
    const handleChange = (event: SelectChangeEvent<string[]>) => {
        const target = event.target.value;
        if (typeof target === 'string') return;
        setCategory(target);
      };

  return (
    <>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>カテゴリ</InputLabel>
        <Select
          multiple
          value={category}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((v, i) => (
                <Chip sx={{background: "#f5f5f5"}} key={i} label={v} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {categories.map((v, i) => (
            <MenuItem
              key={i}
              value={v.name}
              style={getStyles(v.name, category.map((v) => v), theme)}
            >
              {v.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl></>
  );
}