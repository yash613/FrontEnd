import { useState, useEffect } from "react";
import Sort from "./sort";

const Table = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetchRecordsFromURL()
    }, [])

    const fetchRecordsFromURL = () => {
        fetch("records.json")
        .then(data => data.json())
        .then((data) => {
            console.log(data);
            setRecords(data);
        })
        .catch(err => console.log(err))
    }

    const sortByName = () => {
        const newArray = records;
        records.sort((obj1, obj2) => (obj1.name > obj2.name) ? 1 : -1);
        setRecords([...newArray]);
    }


    const sortByAge = () => {
        const newArray = records;
        records.sort((obj1, obj2) => (Date.parse(obj1.date) < Date.parse(obj2.date)) ? 1 : -1);
        setRecords([...newArray]);
    }

    return(
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            records.map((item, index) => (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <Sort sortByName={sortByName} sortByAge={sortByAge}></Sort>
            </div>
        </div>
    )
}

export default Table;