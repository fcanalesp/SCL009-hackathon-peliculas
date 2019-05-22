const filterMovieGenre = (movies,genre) =>{
    const moviegenre = movies.filter(element => element.Genre.includes(genre));
     return moviegenre
    }
    window.filterMovieGenre= filterMovieGenre;


const filterMovieType = (movies,type) =>{
        const moviegenre = movies.filter(element => element.Type.includes(type));
         return moviegenre
        }
        window.filterMovieType= filterMovieType;    