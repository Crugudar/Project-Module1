'use strict'


const movies = 'https://claumovies2.herokuapp.com/movies';

//acceso a base de datos de pelis


async function getMovies(url){
    const moviesResponse = await fetch(url);
    var moviesJSON = await moviesResponse.json();
    

     return  moviesJSON; 
}

 console.log(getMovies(movies));




//constructor de filtros
class Filtro{
    constructor(color, director_name, genres, plot_keywords ){
    this.color=color;
    this.director_name=director_name;
    this.genres=genres;
    this.plot_keywords=plot_keywords;
    }
}

//función de filtrado
function filtrar(movieColl,filtro){

	var filteredMovies= movieColl.filter((movie)=>{
		if(filtro.color !== null && movie.color === filtro.color){
            if (filtro.genres !== null$ && movie.genres.includes(filtro.genres)
			if(filtro.director_name !== null && movie.director_name === filtro.director_name){
			
			return true;  

			}

		}
		return false;
	});

	return filteredMovies;
}

let filtro1= new Filtro('Color', 'James Cameron');


//Recogida de datos del usuario

class Formulario{
    constructor(director_name,genre, actor_name, plot_keywords, color, BandW){
        this.director_name=document.getElementById('Dname');
        this.genre=document.getElementById('movieGenre');
        this.actor_name=document.getElementById('Aname');
        this.plot_keywords=document.getElementById('plot')
        this.color=document.getElementById('color');
        this.BandW=document.getElementById('b&w')

    }
}

var repuesta1=new Formulario;

console.log(respuesta1);


// var películas= await getMovies(movies);
// var filtered= filtrar(películas, filtro1);





// console.log(filtradas);