import React from 'react';
import PropTypes from 'prop-types';

function Detail({ exerciseDetail }) {
  const {
    // bodyPart, gifUrl, name, target, equipment,
    gifUrl, name, target,
  } = exerciseDetail;

  return (
    <div className="flex flex-col md:flex-row items-center">
      <img src={gifUrl} alt={name} loading="lazy" className="h-96" />
      <div>
        <p className="capitalize font-bold text-2xl md:text-6xl">
          {name}
        </p>
        <p className="text-xl sm:text-2xl">
          Exercises keep you healthy.
          <span className="font-bold capitalize text-fuchsia-600">{name}</span>
          {' '}
          is one of the best exercises
          to target your
          {' '}
          <span className="font-bold text-purple-700">{target}</span>
          .
          <br />
          It will help improve your mood and gain energy.
        </p>
      </div>
    </div>
  );
}

export default Detail;

Detail.propTypes = {
  exerciseDetail: PropTypes.string,
};

Detail.defaultProps = {
  exerciseDetail: '',
};
