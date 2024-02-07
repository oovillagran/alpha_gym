import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function ExerciseCard({ exercise }) {
  return (
    <div className="hover:scale-110 bg-white rounded-lg flex flex-col items-center hover:border-t-4 border-orange-700">
      <NavLink to={`/exercise/${exercise.id}`}>
        <img className="h-52 sm:h-80 pt-4" src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <div className="flex gap-4 justify-center items-center py-8">
          <button
            type="button"
            style={{
              textTransform: 'capitalize',
              marginLeft: '21px',
              color: '#fff',
              backgroundColor: '#ffa9a9',
              fontSize: '1rem',
            }}
            className="px-2 rounded-lg font-bold"
            onClick={() => {}}
          >
            {exercise.bodyPart}
          </button>
          <button
            type="button"
            style={{
              textTransform: 'capitalize',
              marginLeft: '21px',
              color: '#fff',
              backgroundColor: '#fcc757',
              fontSize: '1rem',
            }}
            className="px-2 rounded-lg font-bold"
            onClick={() => {}}
          >
            {exercise.target}
          </button>
        </div>
        <div className="flex justify-center items-center">
          <p
            className="flex pb-8 mt-8 font-bold flex-wrap"
            style={{
              textTransform: 'capitalize',
            }}
          >
            {exercise.name}
          </p>
        </div>
      </NavLink>
    </div>
  );
}

export default ExerciseCard;

ExerciseCard.propTypes = {
  exercise: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
