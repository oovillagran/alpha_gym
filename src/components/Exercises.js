import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "./fetchData";


function Exercises({ exercises, setExercises, bodyPart })  {
  console.log(exercises);

  return (
    <>
      <h3 id="exercises" className="mb-44">Showing Results</h3>
      <ul>
        {exercises.map((exercise, index) => (
        <li key={index}>{exercise.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Exercises;
