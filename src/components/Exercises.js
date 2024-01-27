// import React from 'react';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { exerciseOptions, fetchData } from './fetchData';
import ExerciseCard from './ExerciseCard';

// function Exercises({ exercises, setExercises, bodyPart }) {
function Exercises({
  exercises, resetPagination, setExercises, bodyPart,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 12;

  useEffect(() => {
    setCurrentPage(1);
  }, [exercises, resetPagination]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
  }, [bodyPart]);

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
      <div className="flex justify-center items-center my-10 border border-red-700 flex-wrap">
        <button
          type="button"
          onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
          className={`mx-2 px-3 py-1 rounded ${
            currentPage === 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-gray-600 text-white'
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {exercises.length > exercisesPerPage
          && Array.from({ length: Math.ceil(exercises.length / exercisesPerPage) }, (_, i) => (
            <button
              key={i + 1}
              type="button"
              onClick={() => paginate(i + 1)}
              className={`mx-2 px-3 py-1 rounded ${
                currentPage === i + 1 ? 'bg-gray-600 text-white' : 'bg-gray-300 text-gray-600'
              }`}
            >
              {i + 1}
            </button>
          ))}

        <button
          type="button"
          onClick={() => setCurrentPage(
            (prevPage) => Math.min(prevPage + 1, Math.ceil(exercises.length / exercisesPerPage)),
          )}
          className={`mx-2 px-3 py-1 rounded ${
            currentPage === Math.ceil(exercises.length / exercisesPerPage)
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-gray-600 text-white'
          }`}
          disabled={currentPage === Math.ceil(exercises.length / exercisesPerPage)}
        >
          Next
        </button>
      </div>
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
