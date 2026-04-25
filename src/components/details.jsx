import {useState} from "react";
function Details(props)
{
    const [showDetails,setShowDetails]=useState(false);
    const{build_year, time_period, location}=props.information;
    return(
        <>
        <button
        className="btn btn-outline_primary"
        onClick={()=>setShowDetails(!showDetails)}>
        {showDetails?" Hide details" : "show Details"}
    </button>
        {showDetails ?
        <ul className="list-group">
            <li className="list-group-item" ><strong>build year : {build_year}</strong></li>
            <li kclassName="list-group-item"><strong>time period : {time_period}</strong></li>
            <li className="list-group-item" ><strong>location :{location}</strong></li>
        </ul>
        :null
        }
        </>
    )
}
export default Details
