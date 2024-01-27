import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import BodyPartImage from '../assets/icons/muscle.svg';
import TargetImage from '../assets/icons/target.svg';
import EquipmentImage from '../assets/icons/gym.svg';

function Detail({ exerciseDetail }) {
  const {
    bodyPart, gifUrl, name, target, equipment,
  } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    // <div className="flex flex-col md:flex-row items-center">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
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
          <span className="font-bold text-purple-700 capitalize">{target}</span>
          .
          <br />
          It will help improve your mood and gain energy.
        </p>
        {extraDetail.map((item) => (
          <div key={uuidv4()} className="flex items-center pb-5">
            <button
              type="button"
              style={{
                border: 'none', background: '#fff2db', borderRadius: '50%', padding: 0, width: '100px', height: '100px',
              }}
              className="flex items-center justify-center"
            >
              <img alt={item.name} src={item.icon} className="h-16" />
            </button>
            <p className="text-base pl-10 capitalize">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Detail;

Detail.propTypes = {
  exerciseDetail: PropTypes.shape({
    bodyPart: PropTypes.string,
    gifUrl: PropTypes.string,
    name: PropTypes.string,
    target: PropTypes.string,
    equipment: PropTypes.string,
  }),
};

Detail.defaultProps = {
  exerciseDetail: {},
};
