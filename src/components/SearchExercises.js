// import React, { useState } from 'react';
import React, { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from './fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

function SearchExercises() {
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fecthExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    };

    fecthExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      // console.log(exercisesData);
      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search),
      );

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <>
      <p className="flex justify-center items-center mt-36 p-20 font-content font-extrabold text-6xl leading-relaxed">
        Awesome Exercises
        <br />
        You Should Know
      </p>
      <div className="flex justify-center items-center px-60">
        <input
          className="border border-gray-300 p-2 rounded-md w-full"
          placeholder="Search by Category"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          type="text"
        />
        <button
          type="button"
          className="bg-red-500 hover:bg-slate-200 border border-red-500 text-white hover:text-red-500 py-2 px-8 rounded-md"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <HorizontalScrollbar data={bodyParts} />
      {/* <HorizontalScrollbar /> */}
    </>
  );
}

export default SearchExercises;
