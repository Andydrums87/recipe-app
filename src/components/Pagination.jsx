import React from "react";


function Pagination ({ goToNextPage, goToPrevPage, nPage, setCurrentPage, currentPage })  {
 
//     const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

//     const goToNextPage = () => {
//         if(currentPage !== nPages) 
//             setCurrentPage(currentPage + 1)
//     }

//     const goToPrevPage = () => {
//         if(currentPage !== 1) 
//             setCurrentPage(currentPage -1)
//     }
//     return (
//         <ul className="pagination">
//             <li>
//                 <a href=""
//                 onClick={goToPrevPage}>
//                     Previous
//                 </a>
//             </li>
//            <nav className="pag__container">
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
   
// }

export default Pagination;