'use strict'

const movies = 'https://claumovies2.herokuapp.com/movies';

//acceso a base de datos


async function getMovies(url){
    const moviesResponse = await fetch(url);
    var moviesJSON = await moviesResponse.json();
    

     return  moviesJSON; 
}



//constructor de filtros
class Filtro{
    constructor(color, director_name){
    this.color=color;
    this.director_name=director_name;
    }
}

//función de filtrado
function filtrar(movieColl,filtro){

	var filteredMovies= movieColl.filter((movie)=>{
		if(filtro.director_name !== null && movie.director_name === filtro.director_name){
			if(filtro.color !== null && movie.color === filtro.color){
			
			return true;  

			}

		}
		return false;
	});

	return filteredMovies;
}

let filtro1= new Filtro('Color', 'James Cameron');

console.log(filtro1);

async function currar(){
var películas= await getMovies(movies);
return filtrar(películas, filtro1);

}

console.log(currar());

// console.log(filtradas);






