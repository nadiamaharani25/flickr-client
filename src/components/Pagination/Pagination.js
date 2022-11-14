import React, { useState } from "react";

const usePagination = (data, itemsPerPage) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  
  const maxPage = Math.ceil(data.length / itemsPerPage);

  const currentData = () => {
    const previous = (currentPage - 1) * itemsPerPage;
    const next = previous + itemsPerPage;
    return data.slice(previous, next);
  };
  // Set navigation for pagination
  const jump = (page) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  };
  return { currentData, jump, currentPage, maxPage };
};

export default usePagination;
