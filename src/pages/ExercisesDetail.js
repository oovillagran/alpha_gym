// import React, { useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
import { useParams } from 'react-router';
import { exerciseOptions, fetchData } from '../components/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
// import { exerciseOptions } from '../components/fetchData';

function ExercisesDetail() {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fecthExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      // const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);
    };

    fecthExercisesData();
  }, [id]);

  return (
    <div>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </div>
  );
}

export default ExercisesDetail;
