import React from 'react';
import PropTypes from 'prop-types';

function BodyPart({ item, setBodyPart, bodyPart }) {
  return (
    // <p>
    //   {item}
    // </p>
    <button type="button" style={{ textTransform: 'capitalize' }}>{item}</button>
    // <button type="button"  style={{ textTransform: 'capitalize' }}>{bodyPart === item}</button>
  );
}

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

export default BodyPart;
