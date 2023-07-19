import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography, Pagination } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  console.log(exercises);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercise = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => { // Material UI Pagination component also returns the value of currentPage as a "second parameter" to the function which is assigned to "onChange" event 
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth"});
  }

  return (
    <Box id="exercises" 
      sx={{
        mt: { lg: '110px' }
      }}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" mb="46px">Showing Results</Typography>
      <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap="wrap" justifyContent="center" >
          {
            currentExercise.map((exercise, index) => <ExerciseCard key={index} exercise={exercise} />)
          }
      </Stack>
      <Stack mt="100px" alignItems="center">
          {
            exercises.length > 9 && <Pagination color="standard" shape="rounded" defaultPage={1} count={Math.ceil(exercises.length / exercisesPerPage)} page={currentPage} onChange={paginate} size="large" />
          }
      </Stack>
    </Box>
  )
}

export default Exercises;