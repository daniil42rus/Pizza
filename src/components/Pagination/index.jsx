import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

export const Pagination = ({ setCurrentPage }) => {
  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => setCurrentPage(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};
