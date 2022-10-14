import React from "react";
import { useState } from "react";
import "./home.css";
import { dataList } from "../../constant";
import List from "../../component/list/List";
import Filter from "../../component/filter/Filter";
import Nav from "../../component/nav/Nav";
const Home = () => {
    const [data, datachange] = useState(dataList);
    return <>
        <div className="home_container">
            <Nav />
            <div className="home_filter_container">
                <Filter key={data.id}  arrchange={datachange} />
                <List key={data.id} arr={data} />
            </div>
        </div>
    </>
}

export default Home;
