import React, {useState} from "react";
import "./sort.css"
// import ExpandDown from "../images/Expand_down.svg"


function OrderBy ({data, sortData, handleSelect, setSelectValue, selectValue}) {

   

    // const handleSelect = (data) => {
    //     let sort = data.sort((a, b) => b.idMeal - a.idMeal)
    //     setData(sort)
    // }
 
    return (
       
         <select className="order_by" name="sort" id="sort" value={sortData} onChange={(e) => handleSelect(e.target.value)}>
            
            <option value="name">Sort by: Name </option>
            <option value="id">Sort by: Id</option>
        </select>

     
       
    )
}
export default OrderBy;