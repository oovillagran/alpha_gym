// import React, { useEffect, useState } from 'react';
import React from 'react';
// import { useParams } from 'react-router';
// import { exerciseOptions, fetchData } from '../components/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

function ExercisesDetail() {
  return (
    <div>
      <Detail />
      <ExerciseVideos />
      <SimilarExercises />
    </div>
  );
}

export default ExercisesDetail;
