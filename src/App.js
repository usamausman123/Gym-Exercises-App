import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';

function App() {
  return (
    <Box width="400px" sx={{ width: {xl: '1488px'}}} m="auto"> {/* The 'sx' prop is a shortcut for defining custom styles that has access to the theme. The 'sx' prop lets you work with a superset of CSS that packages all of the style functions exposed in '@mui/system'. You can specify any valid CSS using this prop, as well as many theme-aware properties that are unique to MUI System. The system prop(sx), which allows defining "system overrides" as well as "additional CSS styles". */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
