function Genres({genres}){
    const genresString = genres.reduce((genreString, genre) =>{
        genreString+= ` ${genre}`
        return genreString
    },'')
    return (<li className='bold'>{genresString}</li>)
}
export default Genres;