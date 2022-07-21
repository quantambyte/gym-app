import { useState, useEffect } from 'react';
import { Box, Stack, Typography, Pagination } from '@mui/material';

import { Loader, ExerciseCard } from '../../components';

import {
  EXERCISE_BASE_URL,
  EXERCISE_SPECIFIC_BODY_PART_URL,
} from '../../helpers/API/ExerciseAPI';

import { exerciseOptions, fetchData } from '../../utils/fetchData';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData(EXERCISE_BASE_URL, exerciseOptions);
      } else {
        exercisesData = await fetchData(
          `${EXERCISE_SPECIFIC_BODY_PART_URL}/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises =
    exercises.length > 3 &&
    exercises?.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <Box id='exercises' sx={{ mt: { lg: '109px' } }} mt='50px' p='20px'>
      <Typography
        variant='h4'
        fontWeight='bold'
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb='46px'
      >
        Showing Results
      </Typography>
      <Stack
        direction='row'
        sx={{ gap: { lg: '107px', xs: '50px' } }}
        flexWrap='wrap'
        justifyContent='center'
      >
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems='center'>
        {exercises.length > 9 && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
