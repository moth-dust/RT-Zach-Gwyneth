
function Livesearch({updateLiveSearch}){
return(
    <input className="live-search" onChange={(e)=>{updateLiveSearch((e.target.value))}}></input>
)
}
export default Livesearch;
