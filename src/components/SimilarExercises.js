import React from 'react';
// import HorizontalScrollbar from './HorizontalScrollbar';
// import Loader from './Loader';

function SimilarExercises({ targetMuscleExercises, equipmentExercises }) {
  return (
    <div className="mb-10">
      <h3 className="mb-10 font-bold text-lg md:text-2xl">
          Exercises that target the same muscle group.
      </h3>
      {/* <div> */}
        {/* {targetMuscleExercises.length ? */}
        {/* {targetMuscleExercises.slice(0, 3) ? */}
          {/* <HorizontalScrollbar data={targetMuscleExercises} /> */}
          {/* : <Loader /> */}
        {/* } */}
      {/* </div> */}
    </div>
  );
}

export default SimilarExercises;
