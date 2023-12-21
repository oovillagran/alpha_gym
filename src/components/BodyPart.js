import React from 'react';

function BodyPart({ item, setBodyPart, bodyPart }) {
  return (
    // <p>
    //   {item}
    // </p>
    <button type="button"  style={{ textTransform: 'capitalize' }}>{item}</button>
    // <button type="button"  style={{ textTransform: 'capitalize' }}>{bodyPart === item}</button>
  );
}

export default BodyPart;
