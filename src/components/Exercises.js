import React from 'react';
// import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Exercises({ exercises, setExercises, bodyPart }) {
  console.log(exercises);

  return (
    <div>
      <h3 className="mb-44">Showing Results</h3>
      <ul id="exercises">
        {exercises.map((exercise) => (
          <li key={exercise.id}>{exercise.name}</li>
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