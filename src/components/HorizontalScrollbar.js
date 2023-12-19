import React from 'react';
import PropTypes from 'prop-types';
import All from '../assets/images/all.jpg';
import Back from '../assets/images/back.jpg';
import Cardio from '../assets/images/cardio.jpg';
import Chest from '../assets/images/chest.jpg';
import LowerArms from '../assets/images/lowerarms.jpg';
import LowerLegs from '../assets/images/lowerlegs.jpg';
import Neck from '../assets/images/neck.jpg';
import Shoulders from '../assets/images/shoulders.jpg';
import UpperArms from '../assets/images/upperarms.jpg';
import UpperLegs from '../assets/images/upperlegs.jpg';
import Waist from '../assets/images/waist.jpg';

function HorizontalScrollbar({ data }) {
  const images = [
    { id: 'all', path: All },
    { id: 'back', path: Back },
    { id: 'cardio', path: Cardio },
    { id: 'chest', path: Chest },
    { id: 'lower arms', path: LowerArms },
    { id: 'lower legs', path: LowerLegs },
    { id: 'neck', path: Neck },
    { id: 'shoulders', path: Shoulders },
    { id: 'upper arms', path: UpperArms },
    { id: 'upper legs', path: UpperLegs },
    { id: 'waist', path: Waist },
  ];

  const getImagePath = (id) => {
    const image = images.find((img) => img.id === id);
    return image ? image.path : null;
  };

  return (
    <>
      <p className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mx-4">
        {data.map((item) => (
          <div
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
          >
            {item}
            <img src={getImagePath(item)} alt={item} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </p>
    </>
  );
}

HorizontalScrollbar.propTypes = {
  data: PropTypes.instanceOf(Array),
};

HorizontalScrollbar.defaultProps = {
  data: [],
};

export default HorizontalScrollbar;
