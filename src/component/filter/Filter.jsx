import React, { useState } from "react";
import "./filter.css"
import DatePicker from "react-datepicker";
import { dataList } from "../../constant";
import "react-datepicker/dist/react-datepicker.css";

const Filter = ({ arrchange }) => {


    // Price range
    const [price, setPrice] = useState("100-10000");

    const pricehandleChange = (e) => {
        setPrice(e.target.value);
    };
   


    // Property Type
    const [Ptype, setPtype] = useState(" ");
    const pro_typeHandlechange = (e) => {
        setPtype(e.target.value);

    }


    //Date
    const [startDate, setStartDate] = useState(new Date());
    

    //Spliting price in ranges
    const rangeArr = price.split("-");
    const minRange = rangeArr[0];
    console.log(rangeArr);
    const maxRange = rangeArr[1];


    // Main Filtering Function
    const change = () => {
        const updatearr = dataList.filter((curele) => {
            return curele.propertyType == Ptype && curele.price >= minRange && curele.price <= maxRange && curele.moveIn < startDate && curele.state == place;
        });
        arrchange(updatearr);
    }

    //state input filter process
    const [place, setPlace] = useState("");
    const placehandlechange = (e) => {
        setPlace(e.target.value);
    }
    const onSearch = (searchTerm) => {
        setPlace(searchTerm);
        
    };



    return (

        <div className="filter_container">
            <div className="searchbar_filter-wrap">
                <h1>Search properties to rent</h1>
                <select className="input-box" onChange={pro_typeHandlechange}>
                    <option value="">with Pool</option>
                    <option value="">Pet Friendly</option>
                    <option value="">Studio</option>
                    <option value="">In unit laundry</option>
                </select>
            </div>
            <div className="dropdown_filter-wrap">
                <div className="location-wrap">
                    <p className="wrap-text">Location</p>
                    <p>
                        <input type="text" value={place} placeholder="New York" onChange={placehandlechange} className="input-box location" />
                    </p>
                    {/* Creating searching dropdown div */}
                    <div className="dropdown" >
                        {dataList
                            .filter((item) => {
                                const searchTerm = place.toLowerCase();
                                const fullName = item.state.toLowerCase();

                                return (
                                    searchTerm &&
                                    fullName.startsWith(searchTerm) &&
                                    fullName !== searchTerm
                                );
                            })
                            .slice(0,1)
                            .map((item) => (
                                <div
                                    onClick={() => onSearch(item.state)}
                                    className="dropdown-row"
                                    key={item.id}
                                >
                                    {item.state}
                                </div>
                            ))}
                    </div>
                </div>
                <div className="date-wrap">
                    <p className="wrap-text">When</p>
                    <p>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="input-box" />
                    </p>
                </div>
                <div className="price-wrap">
                    <p className="wrap-text">Price</p>
                    <p>
                        <select id="price" name="price_range" onChange={pricehandleChange} className="input-box" >
                            <option value="500-1500" selected>$500-$1500</option>
                            <option value="1500-3000">$1500-$3000</option>
                            <option value="3000-4500">$3000-$4500</option>
                        </select>
                    </p>
                </div>
               
                <div className="propert-wrap">
                    <p className="wrap-text">Property type</p>
                    <p>
                        <select id="proType" onChange={pro_typeHandlechange} className="input-box">
                            <option value="Pet Friendly" >Pet Friendly</option>
                            <option value="In-unit laundary" selected>In-unit laundry</option>
                            <option value="Studio Appartment">Studio apartments</option>
                            <option value="With Pool">With Pools</option>
                        </select>
                    </p>
                </div>
                <div className="srch-btn-wrap">
                    <p><button onClick={change}>Search</button></p>

                </div>
            </div>
            
        </div >

    )
}
export default Filter;