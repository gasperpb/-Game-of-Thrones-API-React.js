import React from 'react'

export const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
    return <ul className='character-pagination'>
        {pageNumbers}
    </ul>
}
