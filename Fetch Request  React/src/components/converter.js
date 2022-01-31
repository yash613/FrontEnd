import { currenyRate } from "./curreny-rate"

let convert = () => {
    let from = document.getElementById("from").value;
    let fromCurr = document.getElementById("fromCurr").value;
    let toCurr = document.getElementById("toCurr").value;
    let to = document.getElementById("to");
    to.value = (from/currenyRate[fromCurr]) * currenyRate[toCurr];
}


const Converter = () => {
    return ( 
        <div>
            <h1 style={{textAlign: 'center'}}>Curreny Converter</h1>
            <div style={{textAlign: 'center'}}>
                <input id="from" onChange={convert}></input>
                <select id="fromCurr" onChange={convert}>
                    {
                        Object.keys(currenyRate).map((key, index) => (
                            <option key={index} value={key}>{key}</option>
                        ))
                    } 
                </select>
                <br></br>
                <br></br>
                <input readOnly = {true} id="to"></input>
                <select id="toCurr" onChange={convert}>
                    {
                        Object.keys(currenyRate).map((key, index) => (
                            <option key={index} value={key}>{key}</option>
                        ))
                    } 
                </select>

                
            </div>
        </div>
     );
}
 
export default Converter;