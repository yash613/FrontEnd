import { buildTimeValue } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";

const Sort = (props) => {
    
    return (
        <div style={{textAlign: 'center'}}>
            <button onClick={props.sortByName} style={{border:'1px black solid'}}>sort by name</button>
            <button onClick={props.sortByAge} style={{border:'1px black solid'}}>sort by age</button>
        </div>
    )
}

export default Sort;