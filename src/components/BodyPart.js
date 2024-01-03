import React from 'react';
import PropTypes from 'prop-types';

function BodyPart({ item, setBodyPart, bodyPart }) {
  // console.log(item)

  return (
    <button type="button" style={{ textTransform: 'capitalize' }}>{item}</button>
  );
}

export default BodyPart;
// BodyPart.propTypes = {
//   item: PropTypes.instanceOf(Array),
//   setBodyPart: PropTypes.func,
//   bodyPart: PropTypes.string,
// };

// BodyPart.defaultProps = {
//   item: [],
//   setBodyPart: () => {},
//   bodyPart: '',
// };

