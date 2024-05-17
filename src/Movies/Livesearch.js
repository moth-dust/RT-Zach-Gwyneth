import { getValue } from "@testing-library/user-event/dist/utils";

function Livesearch({liveSearch, movies}){

return(
    <input className="live-search" onChange={(e)=>{liveSearch((e.target.value),movies)}}></input>
)
}
export default Livesearch;

//e.target.value