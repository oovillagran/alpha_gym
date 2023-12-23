import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "./fetchData";


function Exercises({ exercises = [], setExercises, bodyPart })  {
  console.log(exercises);

  return (
    <div>
      <h3 className="mb-44">Showing Results</h3>
      <ul id="exercises">
        {exercises && exercises.length > 0 ? (
          exercises.map((exercise, index) => (
          <li key={index}>{exercise.name}</li>
          ))
        ) : (
          <li>No exercises found</li>
        )}
      </ul>
    </div>
  );
}

export default Exercises;
