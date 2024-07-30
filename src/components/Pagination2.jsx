import React from "react";

function Pagination2({numbers,goToNextPage, goToPrevPage, nPage, setCurrentPage, currentPage}) {
    return (
        <ul className="pagination">
            <li className = {`page__item ${currentPage === nPage ? 'active' : ''}`}>
                <button 
                onClick={goToPrevPage}>
                    Previous
                </button>
            </li>
            {numbers.map((n, i) => {
                return (
                    <li key={i}>
                        <button onClick={()=>setCurrentPage(n)}>
    
                              {n}
                        </button>
                    </li>
                )
            })}
            <li className ={`page__item ${currentPage === nPage ? 'active' : ''}`}>
                <button  onClick={goToNextPage}>
                    Next
                </button>
            </li>
        </ul>
    
    
    )
}

export default Pagination2;