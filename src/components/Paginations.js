import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';

const Paginations = ({getAllPages , pageCount }) => {
    const handlePageClick = (data) => {
        console.log(data.selected + 1);
        getAllPages(data.selected + 1)

    }
    // const [count, setCount] = useState(0)
    // const pagenum = () => {
    //     if((pageCount) > 500){
    //        pageCount(500)
           
    //     }
    // }
    console.log(pageCount);
  return (
    <ReactPaginate
    breakLabel="..."
    nextLabel="التالي"
    onPageChange={handlePageClick}
    marginPagesDisplayed={2}
    pageRangeDisplayed={2}
    pageCount={pageCount}
    previousLabel="السابق"
    
    containerClassName={"pagination justify-content-center p-3 "}
    pageClassName={"page-item"}
    pageLinkClassName={"page-link"}
    previousClassName={"page-item"}
    nextClassName={"page-item"}
    previousLinkClassName={"page-link page-link2"}
    nextLinkClassName={"page-link"}
    breakClassName={"page-item"}
    breakLinkClassName={"page-link"}
    activeClassName={"active"}
  />
  )
}

export default Paginations