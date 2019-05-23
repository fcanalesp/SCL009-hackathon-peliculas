const filterGenre = document.querySelectorAll("button.genre-movie");
const filterGenreTwo = document.querySelectorAll("button.genre-movie-uni");
const filterGenreThree = document.querySelectorAll("button.genre-movie-boy");
const filterType = document.querySelectorAll("button.time-movie");
const filterTypeTwo = document.querySelectorAll("button.time-movie-uni");
const filterTypeThree = document.querySelectorAll("button.time-movie-boy");
const random = document.querySelectorAll("button.random-movie");
const randomTwo = document.querySelectorAll("button.random-movie-two");
const randomThree = document.querySelectorAll("button.random-movie-three");




document.getElementById("partOneGirls").style.display = 'none';
document.getElementById("partTwoGirls").style.display = 'none';
document.getElementById("partThreeGirls").style.display = 'none';
document.getElementById("partOneUnicorns").style.display = 'none';
document.getElementById("partTwoUnicorns").style.display = 'none';
document.getElementById("partThreeUnicorns").style.display = 'none';
document.getElementById("partOneBoys").style.display = 'none';
document.getElementById("partTwoBoys").style.display = 'none';
document.getElementById("partThreeBoys").style.display = 'none';
document.getElementById("part-four").innerHTML="";
document.getElementById("part-five").innerHTML="";
document.getElementById("part-six").innerHTML="";
//logo
document.getElementById("logo").addEventListener('click', () => {
  document.getElementById("part-four").innerHTML="";
  document.getElementById("part-five").innerHTML="";
  document.getElementById("part-six").innerHTML="";
   partOneGirls.style.display ='none';
   partTwoGirls.style.display ='none';
   partThreeGirls.style.display = 'none';
   partOneUnicorns.style.display = 'none';
   partTwoUnicorns.style.display = 'none';
   partThreeUnicorns.style.display = 'none';
   partOneBoys.style.display = 'none';
   partTwoBoys.style.display = 'none';
   partThreeBoys.style.display = 'none';
   document.getElementById("part-select").style.display ='flex';
})

// FUNCION BOTON NIÑAS
document.getElementById("btn-girl").addEventListener('click', () => {
  document.getElementById("part-four").innerHTML="";
    document.getElementById("part-select").style.display = 'none';
    document.getElementById("partOneGirls").style.display = 'block';
    filterGenre.forEach(element => {
        element.addEventListener('click', () => {

            let genre = window.filterMovieGenre(MOVIES.movies, element.getAttribute("genre-movie"))

            console.log(genre);
            document.getElementById("partOneGirls").style.display = 'none';
            document.getElementById("partTwoGirls").style.display = 'block';
            partTwoUnicorns.style.display = 'none';
            partTwoBoys.style.display = 'none';

            filterType.forEach(element => {
                element.addEventListener('click', () => {

                    let type = window.filterMovieType(genre, element.getAttribute("time-movie"))
                    //document.getElementById("respuesta").innerHTML = `<p>${filterType.Title}</p> `
                    console.log(type);
                    document.getElementById("partTwoGirls").style.display = 'none';
                    document.getElementById("partThreeGirls").style.display = 'block';
                    partThreeUnicorns.style.display = 'none';
                    partThreeBoys.style.display = 'none';

                    random.forEach(element => {
                        element.addEventListener('click', () => {

                            let randomNumber = Math.floor(Math.random() * type.length);
                            console.log(randomNumber);

                            let randomResult = [type[randomNumber]];
                            
                            randomResult.forEach(element => {
                                console.log(element.Title);
                                $.getJSON("https://www.omdbapi.com/?t=" + element.Title + "&apikey=bc2c026d")
                                    .then(function (resp) {
                                        document.getElementById("partThreeGirls").style.display = 'none';
                                        document.getElementById("part-four").style.display = 'block';
                                        let name = resp.Title;
                                        let image = resp.Poster;
                                        let plot = resp.Plot;
                                        let runtime = resp.Runtime;
                                        let genreMovie= resp.Genre;
                                        document.getElementById("part-four").innerHTML = `
         <div class="col-sm-12"> 
         <div class="row justify-content-center">
               <div id="girlResult" class="card mb-3" style="max-width: 780px;">
                 <div class="row justify-content-center">
                   
                   <div class="col-md-5">
                       <img src="${image}"  alt="..." style=" border-radius: 1rem; width:100% !important;">
                    </div>       
                      <div class="col-sm-5">
                       <div class="card-body">
                         <h5 class="card-title">${name}</h5>    
                         <p class="card-text">${plot} </p>
                         <h5>Duración: </h5> 
                         <p >${runtime} </p>
                         <h5>Género: </h5> 
                         <p >${genreMovie} </p>
                         </div>
                         </div>
                         <div class="col-md-2">
                 <div class="card-body">
                     
                       <button id="backToMenu" class="btnResult">volver</button>

                 </div>
             </div>
          </div>
       </div>
       </div>        
       </div>
      
       `

       document.getElementById("backToMenu").addEventListener('click',()=> {
        document.getElementById("part-four").innerHTML="";
        document.getElementById("part-five").innerHTML="";
        document.getElementById("part-six").innerHTML="";
         partOneGirls.style.display ='none';
         partTwoGirls.style.display ='none';
         partThreeGirls.style.display = 'none';
         partOneUnicorns.style.display = 'none';
         partTwoUnicorns.style.display = 'none';
         partThreeUnicorns.style.display = 'none';
         partOneBoys.style.display = 'none';
         partTwoBoys.style.display = 'none';
         partThreeBoys.style.display = 'none';
         document.getElementById("part-select").style.display ='flex'; })
   // PRUEBA OTRA PELI                                
      
        
                                })
                            })
                        })
                    });
                })
            });
        })
    });
})


// FUNCION BOTON unicornios
 document.getElementById("btn-unicorn").addEventListener('click', () => {
  
     document.getElementById("part-select").style.display = 'none';
     document.getElementById("partOneUnicorns").style.display = 'block';
     filterGenreTwo.forEach(element => {
         element.addEventListener('click', () => {

             let genre = window.filterMovieGenre(MOVIES.movies, element.getAttribute("genre-movie-uni"))

             console.log(genre);
             document.getElementById("partOneUnicorns").style.display = 'none';
             document.getElementById("partTwoUnicorns").style.display = 'block';
             partTwoGirls.style.display ='none';
             partTwoBoys.style.display ='none';


             filterTypeTwo.forEach(element => {
                element.addEventListener('click', () => {

                    let type = window.filterMovieType(genre, element.getAttribute("time-movie-uni"))
                    //document.getElementById("respuesta").innerHTML = `<p>${filterType.Title}</p> `
                    console.log(type);
                    document.getElementById("partTwoUnicorns").style.display = 'none';
                    document.getElementById("partThreeUnicorns").style.display = 'block';
                    partThreeGirls.style.display = 'none';
                    partThreeBoys.style.display = 'none';


                     randomTwo.forEach(element => {
                        element.addEventListener('click', () => {

                             let randomNumber = Math.floor(Math.random() * type.length);
                             console.log(randomNumber);

                             let randomResult = [type[randomNumber]];
                             
                             randomResult.forEach(element => {
                                 console.log(element.Title);
                                 $.getJSON("https://www.omdbapi.com/?t=" + element.Title + "&apikey=bc2c026d")
                                     .then(function (resp) {
                                         document.getElementById("partThreeUnicorns").style.display = 'none';
                                         document.getElementById("part-five").style.display = 'block';
                                         let name = resp.Title;
                                         let image = resp.Poster;
                                         let plot = resp.Plot;
                                         let runtime = resp.Runtime;
                                         let genreMovie= resp.Genre;
                                         document.getElementById("part-five").innerHTML = `
         <div class="col-sm-12"> 
         <div class="row justify-content-center">
               <div id="girlResult" class="card mb-3" style="max-width: 780px;">
                 <div class="row justify-content-center">
                   
                   <div class="col-md-5">
                       <img src="${image}" id="image-card" alt="..." style=" border-radius: 1rem; width:100% !important;">
                    </div>       
                      <div class="col-sm-5">
                       <div class="card-body">
                         <h5 class="card-title">${name}</h5>    
                         <p class="card-text">${plot} </p>
                         <h5>Duración: </h5> 
                         <p >${runtime} </p>
                         <h5>Género: </h5> 
                         <p >${genreMovie} </p>
                         </div>
                         </div>
                         <div class="col-md-2">
                 <div class="card-body">
                      
                       <button id="backToMenu" class="btnResult">volver</button>

                 </div>
             </div>
          </div>
       </div>
       </div>        
       </div>
      
       `

       document.getElementById("backToMenu").addEventListener('click',()=> {
        document.getElementById("part-four").innerHTML="";
        document.getElementById("part-five").innerHTML="";
        document.getElementById("part-six").innerHTML="";
         partOneGirls.style.display ='none';
         partTwoGirls.style.display ='none';
         partThreeGirls.style.display = 'none';
         partOneUnicorns.style.display = 'none';
         partTwoUnicorns.style.display = 'none';
         partThreeUnicorns.style.display = 'none';
         partOneBoys.style.display = 'none';
         partTwoBoys.style.display = 'none';
         partThreeBoys.style.display = 'none';
         document.getElementById("part-select").style.display ='flex'; })
   // PRUEBA OTRA PELI                                
                                     })
                             })
                         })
                     });
                })
             });
         })
     });
 })

// FUNCION BOTON chicos
 document.getElementById("btn-boy").addEventListener('click', () => {
  document.getElementById("part-four").innerHTML="";
     document.getElementById("part-select").style.display = 'none';
     document.getElementById("partOneBoys").style.display = 'block';
     filterGenreThree.forEach(element => {
         element.addEventListener('click', () => {

             let genre = window.filterMovieGenre(MOVIES.movies, element.getAttribute("genre-movie-boy"))

             console.log(genre);
             document.getElementById("partOneBoys").style.display = 'none';
            document.getElementById("partTwoBoys").style.display = 'block';
            partTwoGirls.style.display = 'none';
            partTwoUnicorns.style.display = 'none';

             filterTypeThree.forEach(element => {
                element.addEventListener('click', () => {

                     let type = window.filterMovieType(genre, element.getAttribute("time-movie-boy"))
                     //document.getElementById("respuesta").innerHTML = `<p>${filterType.Title}</p> `
                     console.log(type);
                     document.getElementById("partTwoBoys").style.display = 'none';
                     document.getElementById("partThreeBoys").style.display = 'block';
                     partThreeGirls.style.display = 'none';
                     partThreeUnicorns.style.display = 'none';


                     randomThree.forEach(element => {
                         element.addEventListener('click', () => {

                             let randomNumber = Math.floor(Math.random() * type.length);
                             console.log(randomNumber);

                             let randomResult = [type[randomNumber]];
                            
                             randomResult.forEach(element => {
                                 console.log(element.Title);
                                 $.getJSON("https://www.omdbapi.com/?t=" + element.Title + "&apikey=bc2c026d")
                                     .then(function (resp) {
                                         document.getElementById("partThreeBoys").style.display = 'none';
                                         document.getElementById("part-six").style.display = 'block';
                                         let name = resp.Title;
                                         let image = resp.Poster;
                                         let plot = resp.Plot;
                                         let runtime = resp.Runtime;
                                         let genreMovie= resp.Genre;
                                         document.getElementById("part-six").innerHTML = `
         <div class="col-sm-12"> 
         <div class="row justify-content-center">
               <div id="girlResult" class="card mb-3" style="max-width: 780px;">
                 <div class="row justify-content-center">
                   
                   <div class="col-md-5">
                       <img src="${image}"  alt="..." style=" border-radius: 1rem; width:100% !important;">
                    </div>       
                      <div class="col-sm-5">
                       <div class="card-body">
                         <h5 class="card-title">${name}</h5>    
                         <p class="card-text">${plot} </p>
                         <h5>Duración: </h5> 
                         <p >${runtime} </p>
                         <h5>Género: </h5> 
                         <p >${genreMovie} </p>
                         </div>
                         </div>
                         <div class="col-md-2">
                 <div class="card-body">
                      
                       <button id="backToMenu" class="btnResult">volver</button>

                 </div>
             </div>
          </div>
       </div>
       </div>        
       </div>
      
       `

       document.getElementById("backToMenu").addEventListener('click',()=> {
        document.getElementById("part-four").innerHTML="";
        document.getElementById("part-five").innerHTML="";
        document.getElementById("part-six").innerHTML="";
         partOneGirls.style.display ='none';
         partTwoGirls.style.display ='none';
         partThreeGirls.style.display = 'none';
         partOneUnicorns.style.display = 'none';
         partTwoUnicorns.style.display = 'none';
         partThreeUnicorns.style.display = 'none';
         partOneBoys.style.display = 'none';
         partTwoBoys.style.display = 'none';
         partThreeBoys.style.display = 'none';
         document.getElementById("part-select").style.display ='flex'; })
   // PRUEBA OTRA PELI                                
                                     })
                             })
                         })
                     });
                 })
             });
         })
     });
 })