'use strict'
//animación main
function animacionOver(){
    var btnExplore=document.getElementById("buton");
    btnExplore.classList.add('animate__swing');
    btnExplore.classList.add('animate__infinite');

}
function animacionOut(){
    var btnExplore=document.getElementById("buton");
    btnExplore.classList.remove('animate__swing');
}

//animaciones About Us
function animacionAUI0(){
    var answers=document.getElementsByClassName('respuesta');
    answers[0].classList.add('animate__slideInLeft'); 
    answers[0].style.display = "block";
    answers[1].style.display = "none";
    answers[2].style.display = "none";
    
}

function animacionAUI1(){
    var answers=document.getElementsByClassName('respuesta');
    answers[0].style.display = "none";
    answers[1].style.display = "block";
    answers[2].style.display = "none";
    answers[1].classList.add('animate__slideInLeft');
}

function animacionAUI2(){
    var answers=document.getElementsByClassName('respuesta');
    answers[0].style.display = "none";
    answers[1].style.display = "none";
    answers[2].style.display = "block";
    answers[2].classList.add('animate__slideInLeft');
}
function animacionDisapear(){
    var answers=document.getElementsByClassName('respuesta');
    answers[0].style.display = "none";
    answers[1].style.display = "none";
    answers[2].style.display = "none";
} 





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
btnFil.addEventListener('click', async function(){
    
    let cartelera=  document.querySelector('.show-movies');
    let newDiv= document.createElement('div');
    
    cartelera.innerHTML=('');
    

    const resultados = getInput();
    
    var pelisBuenas=await filterArr(resultados);
    
    if(pelisBuenas.length>0){
       var visibleData=pelisBuenas.map(movie=>{
        return `<div class="shown-movie"><h4>${movie.movie_title} </h4><div><a href="${movie.movie_imdb_link}">${movie.movie_imdb_link}</a></div></div>`;
    }).join(`<br>`);

    cartelera.appendChild(newDiv);
   
    newDiv.innerHTML=visibleData; 
    }else{
        cartelera.appendChild(newDiv);
   
        newDiv.innerHTML=`<div class="sorry-msg">Sorry what you want to see is yet to be filmed. <br><br>
        Tell us your idea at netflixand@chillin.com and we will send it directly to HOLLYWOOD ;)</div>`;    
    }

    

    
    
       
});   

//función de filtrado

async function filterArr(filtro){
    let movies= await getMovies();
        

    
    let filteredMovies= movies.filter(function(elem){
        if (filtro[0] != '' && filtro[0]!==elem.director_name) return false;
        if (filtro[1] !='' && !elem.genres.includes(filtro[1])) return false;
        if (filtro[2] !=='' && (!elem.actor_1_name.includes(filtro[2]) && !elem.actor_2_name.includes(filtro[2]) && !elem.actor_3_name.includes(filtro[2]))) return false;
        if (filtro[3] !=='' && !elem.plot_keywords.includes(filtro[3])) return false;
        
        return true;

    });

   //console.log(filteredMovies);
   return filteredMovies;
}

