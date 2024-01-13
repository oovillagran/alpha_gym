import { useState } from 'react';
import SearchExercises from './SearchExercises';
import Exercises from './Exercises';

function Home() {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  console.log(bodyPart);
  // const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
      {/* <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      /> */}
    </div>
  );
}

export default Home;
