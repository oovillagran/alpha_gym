import React from 'react';
import PropTypes from 'prop-types';

function BodyPart({ item, bodyPart }) {
  const isSelected = item === bodyPart;

  return (
    <div
      style={{
        textTransform: 'capitalize',
        opacity: 1,
        transform: isSelected ? 'scale(1.1)' : 'scale(1)',
        border: isSelected ? '2px solid cyan' : 'none',
        borderRadius: isSelected ? '8px' : '0',
        padding: '5px',
      }}
    >
      {item}
    </div>
  );
}

export default BodyPart;

BodyPart.propTypes = {
  item: PropTypes.oneOfType([PropTypes.instanceOf(Array), PropTypes.string]),
  bodyPart: PropTypes.oneOfType([PropTypes.instanceOf(Array), PropTypes.string]),
};

BodyPart.defaultProps = {
  item: [],
  bodyPart: [],
};
