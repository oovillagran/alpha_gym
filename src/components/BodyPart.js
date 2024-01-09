import React from 'react';
import PropTypes from 'prop-types';

function BodyPart({ item, setBodyPart, bodyPart }) {
  // console.log(item)
  const isSelected = item === bodyPart;

  return (
    <button
      type="button"
      style={{
        textTransform: 'capitalize',
        // opacity: isSelected ? 1 : 0.5,
        opacity: 1,
        transform: isSelected ? 'scale(1.1)' : 'scale(1)',
        border: isSelected ? '2px solid cyan' : 'none',
        borderRadius: isSelected ? '8px' : '0',
        padding: '5px',
      }}
      onClick={() => {
        setBodyPart(item);
      }}
    >
      {item}
    </button>
  );
}

export default BodyPart;

BodyPart.propTypes = {
  item: PropTypes.instanceOf(Array),
  setBodyPart: PropTypes.func,
  bodyPart: PropTypes.string,
};

BodyPart.defaultProps = {
  item: [],
  setBodyPart: () => {},
  bodyPart: '',
};
