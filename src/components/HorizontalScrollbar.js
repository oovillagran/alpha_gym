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
import BodyPart from './BodyPart';

function HorizontalScrollbar({ data, bodyPart, setBodyPart }) {
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
          <button
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            className="bg-cover bg-center h-40 sm:h-64 flex justify-center items-center hover:scale-105 rounded-lg border-2 border-transparent transition duration-300 ease-in-out hover:border-cyan-500"
            type="button"
            style={{
              backgroundImage: `url(${getImagePath(item)})`,
              transition: 'transform 0.3s, filter 0.3s',
            }}
            onClick={() => {
              setBodyPart(item);
            }}
          >
            <div className="w-full h-full bg-black bg-opacity-50 hover:bg-opacity-0 hover:scale-105 flex justify-center items-center rounded-lg">
              <p className="text-cyan-400 text-2xl font-extrabold">
                <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
              </p>
            </div>
          </button>
        ))}
      </p>
    </>
  );
}

export default HorizontalScrollbar;

HorizontalScrollbar.propTypes = {
  data: PropTypes.instanceOf(Array),
  bodyPart: PropTypes.string,
  setBodyPart: PropTypes.func,
};

HorizontalScrollbar.defaultProps = {
  data: [],
  bodyPart: '',
  setBodyPart: () => {},
};
