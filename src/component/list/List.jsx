import React from "react";
import { useState } from "react";
import FilteredContainer from "./FilteredContainer";
import './style.css';

const List = ({ arr }) => {
    // const [d, changed]=useState(data);
    return (
        <div className="List-container">
            {arr.map((ele) => {
                return(
                    <div >
                    <FilteredContainer para={ele}/>
                    </div>
                )
            
        })}
        </div>
    )
}



export default List;