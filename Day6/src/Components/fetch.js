import React, { useState } from "react";
import { useEffect } from "react";

function FetchData() {
    const [records, setRecords] = useState([])

    useEffect(()=>{
        fetch('http://127.0.0.1:2004/')
        .then(response => response.json())
        .then(data => setRecords(data))
        .catch(err => console.log(err))
    },[])

    return(
        <div>
            {records.map(list=>(
            <li>key = {list.email}</li>   
            ))}
        </div>
    );
}
export default FetchData;