import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { exerciseOptions, fetchData } from './fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

function SearchExercises({ setExercises, bodyPart, setBodyPart }) {
// function SearchExercises({ setExercises, bodyPart, setBodyPart, setCurrentPage }) {
  const [search, setSearch] = useState('');
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
      <p className="flex justify-center items-center mt-5 md:mt-10 p-10 font-content font-extrabold text-2xl md:text-6xl leading-relaxed">
        Awesome Exercises
        <br />
        You Should Know
      </p>
      <div className="flex justify-center items-center px-5 md:px-60 py-5 md:py-20">
        <input
          className="border border-gray-300 p-2 rounded-md w-full"
          placeholder="Search by Category"
          // value=''
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          // onChange={() => {}}
          type="text"
        />
        <button
          type="button"
          className="bg-red-500 hover:bg-slate-200 border border-red-500 text-white hover:text-red-500 py-2 px-8 rounded-md"
          // onClick={() => {}}
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <HorizontalScrollbar
        data={bodyParts}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        isBodyParts
      />
    </>
  );
}

export default SearchExercises;

SearchExercises.propTypes = {
  bodyPart: PropTypes.string,
  setBodyPart: PropTypes.func,
  setExercises: PropTypes.func,
  // setCurrentPage: PropTypes.func,
};

SearchExercises.defaultProps = {
  bodyPart: '',
  setBodyPart: () => {},
  setExercises: () => {},
  // setCurrentPage: () => {},
};
