import { getValue } from "@testing-library/user-event/dist/utils";

function Livesearch({updateLiveSearch, movies}){
return(
    <input className="live-search" onChange={(e)=>{updateLiveSearch((e.target.value))}}></input>
)
}
export default Livesearch;

//e.target.value