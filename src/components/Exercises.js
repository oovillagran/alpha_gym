import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { exerciseOptions, fetchData } from './fetchData';
import ExerciseCard from './ExerciseCard';
import Pagination from './Pagination';

function Exercises({
  exercises, resetPagination, setExercises, bodyPart,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 12;

  useEffect(() => {
    setCurrentPage(1);
  }, [exercises, resetPagination]);

  const totalPages = Math.ceil(exercises.length / exercisesPerPage);
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // useEffect(() => {
  //   const updateVisiblePageRange = () => {
  //     const rightBoundary = Math.min(currentPage + Math.floor(visiblePageRange[1] / 2), totalPages);
  //     const leftBoundary = Math.max(rightBoundary - visiblePageRange[1] + 1, 1);
  //     setVisiblePageRange([leftBoundary, rightBoundary]);
  //   };

  //   updateVisiblePageRange();
  // }, [currentPage, totalPages, visiblePageRange]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  return (

    <div
      className="flex flex-col justify-center items-center mt-10"
      style={{
        background: '#fffafb',
      }}
    >
      <h3 className="mb-16 font-content text-red-400 text-2xl lg:text-6xl font-extrabold">
        Showing Results
      </h3>
      <ul id="exercises" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mx-8">
        {currentExercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </ul>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Exercises;

Exercises.propTypes = {
  exercises: PropTypes.instanceOf(Array),
  setExercises: PropTypes.func,
  bodyPart: PropTypes.string,
  resetPagination: PropTypes.bool,
};

Exercises.defaultProps = {
  exercises: [],
  setExercises: () => {},
  bodyPart: '',
  resetPagination: false,
};
