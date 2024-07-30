import React from "react";
import './pagination.css'

function Pagination({numbers,goToNextPage, goToPrevPage, nPage, setCurrentPage, currentPage}) {
    return (
        <ul id="my__list" className="pagination">
            <li>
                <button 
                onClick={goToPrevPage}>
                   <i class="fa-solid fa-chevron-left"></i>
                </button>
            </li>
            {numbers.map((n, i) => {
                return (
                    <li key={i}>
                        <button className={currentPage -1 === i  ? 'active' : ''} onClick={()=>setCurrentPage(n)}>
                              {n}
                        </button>
                    </li>
                )
            })}
            <li >
                <button  onClick={goToNextPage}>
                <i class="fa-solid fa-chevron-right"></i>
                </button>
            </li>
        </ul>
    
    
    )
}

export default Pagination2;