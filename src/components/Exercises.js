import React from 'react';
// import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { exerciseOptions, fetchData } from './fetchData';
import ExerciseCard from './ExerciseCard';

function Exercises({ exercises, setExercises, bodyPart }) {
  console.log(exercises);

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="mb-44">Showing Results</h3>
      <ul id="exercises" className="grid grid-cols-2 sm:grid-cols-3 gap-10">
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </ul>
    </div>
  );
}

export default Exercises;
// Exercises.propTypes = {
  //   exercises: PropTypes.instanceOf(Array),
  //   setExercises: PropTypes.func,
  //   bodyPart: PropTypes.string,
  // };
  
  // Exercises.defaultProps = {
    //   exercises: [],
    //   setExercises: () => {},
    //   bodyPart: '',
    // };
    
    
    {/* {exercises && exercises.length > 0 ? ( */}
    {/* ) : (
      <li>No exercises found</li>
    )} */}
    {/* {exercises && exercises.length > 0 ? (
      exercises.map((exercise) => (
        <li key={exercise.id}>{exercise.name}</li>
      ))
    ) : (
      <li>No exercises found</li>
    )} */}