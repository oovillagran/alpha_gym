import React from 'react';
import PropTypes from 'prop-types';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const visiblePages = 5;

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

    for (let i = leftOffset; i <= rightOffset; i + 1) {
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
        className={`mx-2 px-3 py-1 rounded ${
          currentPage === 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-gray-600 text-white'
        }`}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {getPageNumbers().map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          className={`mx-2 px-3 py-1 rounded ${
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
        className={`mx-2 px-3 py-1 rounded ${
          currentPage === totalPages
            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
            : 'bg-gray-600 text-white'
        }`}
        disabled={currentPage === totalPages}
      >
        Next
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
