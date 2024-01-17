import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { exerciseOptions, fetchData } from '../components/fetchData';

function ExercisesDetail() {
  return (
    <div>
      <Detail />
      <ExerciseVideos />
      <SimilarExercises />
    </div>
  )
}

export default ExercisesDetail;
