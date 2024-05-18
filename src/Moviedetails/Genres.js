function Genres({genres}){
    const genresString = genres.reduce((genreString, genre) =>{
        genreString+= ` ${genre}`
        return genreString
    },'');
    return (<li className='bold details italic'>{genresString}</li>);
};

export default Genres;