import { OutputImage } from './components/OutputImage'; 
import { InputImages } from './components/InputImages';
import './App.css'
import { Box } from '@mui/material';
import { Bar } from './components/AppBar';

const App = () => {
  return (
    <Box>
      <Bar />
      <InputImages />
      <OutputImage />
    </Box>
  )
}

export default App
