import React from 'react';
import PropTypes from 'prop-types';

function HorizontalScrollbar({ data }) {
  return (
    <>
      <p>
        {data.map((item) => (
          <div
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
          >
            {item}
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
