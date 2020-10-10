


const movies = 'https://claumovies2.herokuapp.com/movies';

//acceso a base de datos


async function getMovies(url, filtro){
    const moviesResponse = await fetch(url);
    var moviesJSON = await moviesResponse.json();
    filteredMovies=moviesJSON.filter(function(movie){
        if(filtro.director_name!==null && movie.director_name === filtro.director_name){
            if(filtro.color!==null&& movie.color===filtro.color){
                
            return true;  

            }

        }
        return false;
        });

     return  filteredMovies; 
}

//constructor de filtros
class Filtro{
    constructor(color, director_name){
    this.color=color;
    this.director_name=director_name;
    }
}

let filtro1= new Filtro('Color', 'James Cameron');

console.log(filtro1);


//getMovies(movies, filtro1);

console.log(getMovies(movies, filtro1));




