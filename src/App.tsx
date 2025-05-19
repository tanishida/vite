import { OutputImage } from './components/OutputImage'; 
import { InputImages } from './components/InputImages';
import './App.css'
import { Box } from '@mui/material';

const App = () => {
  return (
    <Box>
      <InputImages />
      <OutputImage />
    </Box>
  )
}

export default App
