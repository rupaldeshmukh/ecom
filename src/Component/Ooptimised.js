import React, { useState, useEffect, useCallback } from "react";

const OptimizedPagination = ({ items, itemsPerPage, onChangePage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Get current items for the page
  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change (debounced or throttled)
  const handlePageChange = useCallback(
    (newPage) => {
      if (newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage);
        onChangePage(newPage); // Call the parent-provided function
      }
    },
    [totalPages, onChangePage]
  );

  // Effect to load current page data
  useEffect(() => {
    onChangePage(currentPage);
  }, [currentPage, onChangePage]);

  return (
    <div>
      <h2>Pagination</h2>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default OptimizedPagination;
