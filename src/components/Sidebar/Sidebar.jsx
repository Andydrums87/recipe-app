import React, { useState, useEffect, useRef } from "react";
import './sidebar.css'

function Sidebar({category, handleData, setCurrentPage}) {


    const [selectedItem, setSelectedItem] = useState()


    const handleInput = (item, index) => {
        console.log()
        setSelectedItem(item)
        setCurrentPage(1)
    }

   
    

    return (
        <div className="sidebar">
            <h1>Categories</h1>
            
               
                    <ul className="list">
                    {category.map((item, index) => {
                        return (
                            <li key={index}>
                                <button  onClick={(e) => {handleData(e.target.value); handleInput(item, index)}} value={item.strCategory} type="button" style={{ backgroundColor: item === selectedItem ? '#FEBD2E' : 'transparent'}}>
                                        <img src={item.strCategoryThumb} alt="" />{item.strCategory}
                                </button>
{/*                                 
                                <input key={index} onClick={(e) => {handleData(e.target.value); handleInput(item, index)}} value={item.strCategory} type="button" style={{ backgroundColor: item === selectedItem ? '#FEBD2E' : 'transparent' }} /> */}
                            
                           
                            </li>
                        )
                    
                  
                
               
            })}
             </ul>
            
        </div>
        // style={{width: "85%", padding:"20px"}}
        // 

    )
}

export default Sidebar;