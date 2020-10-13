'use strict'


const movies = 'https://claumovies2.herokuapp.com/movies';

//acceso a base de datos de pelis


async function getMovies(){
    const moviesResponse = await fetch('https://claumovies2.herokuapp.com/movies');
    var moviesJSON = await moviesResponse.json();
    

     return  moviesJSON; 
}

 console.log(getMovies());


 //coger datos introducidos por el usuario



function getInput(){
    var filtro1=document.getElementById('Dname').value;
    var filtro2=document.getElementById('movieGenre').value;
    var filtro3=document.getElementById('Aname').value;
    var filtro4=document.getElementById('plot').value; 
    var r = [filtro1, filtro2, filtro3, filtro4];
    
    return r; 
}

 
    
let btnFil= document.getElementById('filter-btn');
btnFil.addEventListener('click', async function (){
    
    const resultados = await getInput();
     await filterArr(...resultados);
    
       
}); 


    

//función de filtrado

async function filterArr(filtro1, filtro2, filtro3, filtro4){
    let movies= await getMovies();
console.log(filtro1, filtro2, filtro3, filtro4, 'vacaciones ya')

    
    let filteredMovies= movies.filter(function(elem){
        return ((filtro1 !==null && filtro1===elem.director_name)&&
                (filtro2 !==null && elem.genres.includes(filtro2))&&
                (filtro3 !==null && (elem.actor_1_name === filtro3 || elem.actor_2_name=== filtro3 || elem.actor_3_name=== filtro3))&&
                (filtro4 !==null && elem.plot_keywords.includes(filtro4)));
    });

   console.log(filteredMovies);
}

//mostrar elementos filtrados en el HTML

async function showMovies(){
    let newContent= await filterArr();
    
    let cartelera= await document.querySelector('.show-movies');
    let newDiv=await document.createElement('div');
    
    await cartelera.appendChild(newDiv);
    await newDiv.innerHTML(newContent);
}

console.log(showMovies());


