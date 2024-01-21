import React from 'react';
import PropTypes from 'prop-types';

function Detail({ exerciseDetail }) {
  const {
    bodyPart, gifUrl, name, target, equipment,
  } = exerciseDetail;

  return (
    <div className="flex items-center">
      <img src={gifUrl} alt={name} loading="lazy" className="h-96" />
      <div>
        <p className="capitalize font-bold">
          {name}
        </p>
        <p>
          Exercises keep you healthy.
          <span className="font-bold capitalize text-fuchsia-600">{name}</span>
          {' '}
          is one of the best exercises
          to target your
          {' '}
          <span className="font-bold text-purple-700">{target}</span>
          . It will help improve your mood and gain energy.
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
