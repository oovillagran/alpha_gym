import React from 'react';
import { NavLink } from 'react-router-dom';

function ExerciseCard({ exercise }) {
  return (
    <div>
      <NavLink to={`/exercise/${exercise.id}`}>
        <img className="h-52 sm:h-80 hover:border-t-4 border-orange-700" src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <div>
          <button
            type="button"
            style={{
              textTransform: 'capitalize',
            }}
            onClick={() => {}}
          >
            {exercise.bodyPart}
          </button>
          <button
            type="button"
            style={{
              textTransform: 'capitalize',
            }}
            onClick={() => {}}
          >
            {exercise.target}
          </button>
        </div>
        <p
          style={{
            textTransform: 'capitalize',
          }}
        >
          {exercise.name}
        </p>
      </NavLink>
      {/* ExerciseCard */}
    </div>
  );
}

export default ExerciseCard;
