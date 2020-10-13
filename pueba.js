'use strict'

function animacionOver(){
    var btnExplore=document.getElementById("buton");
    btnExplore.classList.add('animate__swing');
    btnExplore.classList.add('animate__infinite');

}
function animacionOut(){
    var btnExplore=document.getElementById("buton");
    btnExplore.classList.remove('animate__swing');
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
    
    //.filter(item=>item);


    
    // return {
    //     director_name:filtro1,
    //     genres:filtro2,
    //     actor_1_name:filtro3,
    //     actor_2_name:filtro3,
    //     actor_3_name:filtro3,
    //     plot_keywords:filtro4
    // }; 
}

 
    



let btnFil= document.getElementById('filter-btn');
btnFil.addEventListener('click', async function (){
    
    const resultados = await getInput();
     let prueba=await filterArr(resultados);

     console.log(prueba);
    
       
});   

//función de filtrado

async function filterArr(filtro){
    let movies= await getMovies();
        
//  if(filtro[0]==''){console.log('filtro0 es una string vacía');}else{console.log('filtro0 NO es una string vacía');}
//  if(filtro[0]==null){console.log('filtro0 es null');}else{console.log('filtro0 NO es null');}
    
    let filteredMovies= movies.filter(function(elem){
        if (filtro[0] != '' && filtro[0]!==elem.director_name) return false;
        if (filtro[1] !='' && !elem.genres.includes(filtro[1])) return false;
        if (filtro[2] !=='' && (elem.actor_1_name !== filtro[2] && elem.actor_2_name!== filtro[2] && elem.actor_3_name !== filtro[2])) return false;
        if (filtro[3] !=='' && !elem.plot_keywords.includes(filtro[3])) return false;
        
        return true;

    });

   console.log(filteredMovies);
   return filteredMovies;
}



//mostrar elementos filtrados en el HTML

// async function showMovies(){
//     let newContent= await filterArr();
    
//     let cartelera= await document.querySelector('.show-movies');
//     let newDiv=await document.createElement('div');
    
//     await cartelera.appendChild(newDiv);
//     await newDiv.innerHTML(newContent);
// }

// console.log(showMovies());


