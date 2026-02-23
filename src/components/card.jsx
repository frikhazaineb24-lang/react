import Details from "./details";
function Card(props){
  console.log(props.wonder);

  const information={
    build_year:props.wonder.build_year,
    time_period: props.wonder.time_period,}
    location:props.wonder.location
    const handleWikipediaClick = (id) => {
console.log("ID clicked:", id);
const champ = props.wonder;
if (champ.id === id) {
const wikipediaUrl =
`https://fr.wikipedia.org/wiki/${encodeURIComponent(champ.name)}`;
window.open(wikipediaUrl, "_blank");
}  
}
;
return(
    <>
    <div className="col">
   <div className="card" style={{ width: "18rem" }}>
      <img src={props.wonder.image} className="card-img-top" alt="pyramids" width="100" height="300"/> {/*zedna l wonder hit f app amelna wonder*/}
      <div className="card-body">
        <h5 className="card-title">{props.wonder.name}</h5>
        <p className="card-text">{props.wonder.desc}</p>
        <Details information={information}/>
    <ul>
      <li className="list-group-item" >
        <a className="btn btn-primary"
        onClick={()=>handleWikipediaClick(props.wonder.id)}>
        Wikipédia
        </a>
    </li>
      <li className="list-group-item"> 
        <a href={props.wonder.google_maps} className="btn btn-primary" target="_blank">
        Google maps
        </a>
    </li>
  </ul> 
  </div>
</div>
</div>
</>
)
}
export default Card

