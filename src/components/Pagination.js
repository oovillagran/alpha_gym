import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import next from '../assets/icons/chevron_right.svg';
import previous from '../assets/icons/chevron_left.svg';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const visiblePages = isMobile ? 2 : 10;

  const getPageNumbers = () => {
    if (totalPages <= visiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftOffset = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
    const rightOffset = Math.min(leftOffset + visiblePages - 1, totalPages);

    const pagesToShow = [];

    if (leftOffset > 1) {
      pagesToShow.push(1, '...');
    }

    for (let i = leftOffset; i <= rightOffset; i += 1) {
      pagesToShow.push(i);
    }

    if (rightOffset < totalPages) {
      pagesToShow.push('...', totalPages);
    }

    return pagesToShow;
  };

  return (
    <div className="flex justify-center items-center my-10 border border-red-700 flex-wrap">
      <button
        type="button"
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        className={`mx-${isMobile ? 1 : 2} px-2 py-1 rounded ${
          currentPage === 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-gray-600 text-white'
        }`}
        disabled={currentPage === 1}
      >
        <img src={previous} alt="next_page" className="text-white" style={{ filter: 'invert(100%)' }} />
      </button>

      {getPageNumbers().map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          className={`mx-${isMobile ? 1 : 2} px-2 py-1 rounded ${
            currentPage === page ? 'bg-gray-600 text-white' : 'bg-gray-300 text-gray-600'
          }`}
          disabled={typeof page !== 'number'}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        className={`mx-${isMobile ? 1 : 2} px-2 py-1 rounded ${
          currentPage === totalPages
            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
            : 'bg-gray-600 text-white'
        }`}
        disabled={currentPage === totalPages}
      >
        <img src={next} alt="next_page" className="text-white" style={{ filter: 'invert(100%)' }} />
      </button>
    </div>
  );
}

export default Pagination;

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
  currentPage: 1,
  totalPages: 1,
  onPageChange: () => {},
};
