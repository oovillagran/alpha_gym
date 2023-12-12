// import React, { useState, useEffect } from 'react';

function SearchExercises() {
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
          value=""
          onChange={() => {}}
          type="text"
        />
        <button type="button" className="bg-red-500 text-white py-2 px-8 rounded-md">
          Search
        </button>
      </div>
    </>
  );
}

export default SearchExercises;
