const movies = 'https://claumovies2.herokuapp.com/movies';


async function getMovies(url){
    const moviesResponse = await fetch(url);
    const moviesJSON = await moviesResponse.json();

    console.log(moviesJSON[0].director_name);    
}

getMovies(movies);
  