import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import FetchDataChild from "./Child";

const FetchData = () => {
    const [data, setData] = useState([]);


    const fetchDataFromURL = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((data) => {return data.json();})
        .then((data) => {
            setData(data);
            console.log(data);
        })
        .catch(err => console.log(err))
    }


    return (
        <div style={{textAlign: 'center'}}>
            <button onClick={fetchDataFromURL}>fetch data</button>
            <FetchDataChild data={data}></FetchDataChild>
        </div>
    )
}


export default FetchData;