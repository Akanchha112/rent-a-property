import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faChartArea, faHeart } from '@fortawesome/free-solid-svg-icons'
import "./style.css";
const FilteredContainer = ({ para }) => {
    return <>
        <div className="list">
            <div className="list_image">
                <img src={para.coverSrc} width={"100%"} />
            </div>
            <div className="list-info-container">
                <p className="list_price">
                    <div>
                    <span className="Price-value">${para.price}</span>
                    <span className="per-month">/month </span>
                    </div>
                    <div>
                    <div className="icon_heart"><FontAwesomeIcon icon={faHeart} className="icon" /> </div>
                    </div>
                </p>
                <p className="list-title"><h1>{para.propertyType}</h1></p>
                <p className="list-location">
                    {para.location}
                </p>
                <p className="list-footer">
                    <span><FontAwesomeIcon icon={faBed} className="icon" />   {para.beds} Beds</span>
                    <span><FontAwesomeIcon icon={faBath} className="icon" />   {para.baths} Baths</span>
                    <span><FontAwesomeIcon icon={faChartArea} className="icon" />   {para.area} sqft</span>
                </p>
            </div>
            {/* {para.id}     {para.price}  {para.beds} {para.location} */}

        </div>
    </>
}

export default FilteredContainer;