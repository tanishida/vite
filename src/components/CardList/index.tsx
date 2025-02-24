import { FC, useState } from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

type Props = {
    selectCategories: string[]
}

export const CardList: FC<Props> = ({selectCategories}) => {
    const theme = useTheme();
    const [category, setCategory] = useState<string[]>([]);
    const handleChange = (event: SelectChangeEvent<string[]>) => {
        const target = event.target.value;
        if (typeof target === 'string') return;
        setCategory(target);
      };

  return (
<></>
  );
}