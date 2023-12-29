import React from 'react';
// import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { exerciseOptions, fetchData } from './fetchData';

function Exercises({ exercises = [], setExercises, bodyPart }) {
  console.log(exercises);

  return (
    <div>
      <h3 className="mb-44">Showing Results</h3>
      <ul id="exercises">
        {exercises && exercises.length > 0 ? (
          exercises.map((exercise, index) => (
            <li key={exercise.id}>{exercise.name}</li>
          ))
        ) : (
          <li>No exercises found</li>
        )}
      </ul>
    </div>
  );
}

Exercises.propTypes = {
  exercises: PropTypes.instanceOf(Array),
  setExercises: PropTypes.func,
  bodyPart: PropTypes.string,
};

Exercises.defaultProps = {
  exercises: [],
  setExercises: () => {},
  bodyPart: '',
};

export default Exercises;
