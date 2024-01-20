import React from 'react';

function Detail({ exerciseDetail }) {
  const {
    bodyPart, gifUrl, name, target, equipment,
  } = exerciseDetail;

  return (
    <div className="flex">
      <img src={gifUrl} alt={name} loading="lazy" />
      <div>
        <p className="capitalize">
          {name}
        </p>
        <p>
          Exercises keep you healthy.
          {name}
          {` `}
          is one of the best exercises
          to target your
          {target}. It will help improve your mood and gain energy.
        </p>
      </div>
    </div>
  );
}

export default Detail;
