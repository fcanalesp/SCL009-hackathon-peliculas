const filterGenre = document.querySelectorAll("button.genre-movie");
const filterType = document.querySelectorAll("button.time-movie");
const random = document.querySelectorAll("button.random-movie");
filterGenre.forEach(element => {
    element.addEventListener('click',() =>{
       
    let genre = window.filterMovieGenre(MOVIES.movies,element.getAttribute("genre-movie"))
    
     console.log(genre);
     document.getElementById("part-one").style.display = 'none';
     document.getElementById("part-two").style.display = 'block';
   
     filterType.forEach(element => {
        element.addEventListener('click',() =>{
           
        let type = window.filterMovieType(genre,element.getAttribute("time-movie"))
         //document.getElementById("respuesta").innerHTML = `<p>${filterType.Title}</p> `
         console.log(type);
         document.getElementById("part-two").style.display = 'none';
         document.getElementById("part-tree").style.display = 'block';
      
         random.forEach(element => {
            element.addEventListener('click',() =>{
               
            let randomNumber = Math.floor(Math.random() * type.length ) ;
            console.log(randomNumber);
           
            let randomResult =[  type[randomNumber]];
            console.log(randomResult);
            randomResult.forEach(hola => {
                console.log(hola.Title);
                $.getJSON("https://www.omdbapi.com/?t="+hola.Title+"&apikey=bc2c026d")
                .then(function(resp){
                    document.getElementById("part-tree").style.display = 'none';
                    document.getElementById("part-four").style.display = 'block';
                let name = resp.Title;
                let image= resp.Poster;
                let plot = resp.Plot;
                let runtime = resp.Runtime;
                document.getElementById("part-four").innerHTML =`
             
             <div id="girlResult" class="card mb-3" style="max-width: 780px;">
                 <div class="row no-gutters">
                   
                   <div class="col-md-5 ">
                       <img src="${image}"  alt="...">
                    </div>       
                      <div class="col-sm-6">
                       <div class="card-body">
                         <h5 class="card-title">${name}</h5>    
                         <p class="card-text">${plot} </p>
                         <p >${runtime} </p>
                         </div>
                         </div>
                         
                     </div>
                   </div>
              
              `

            })
            
           
        
        })
        
          })
        });



      
      
      
        })
        
    });
   
   
   
   
   
    })
    
});

/*
random.forEach(element => {
    element.addEventListener('click',() =>{
       
    let randomNumber = Math.floor(Math.random() * type.lenght -1) + 1;
    let randomResult = type[randomNumber];
    $.getJSON("https://www.omdbapi.com/?t="+randomResult+"&apikey=bc2c026d")
    .then(function(resp){
    let image= resp.Poster;
   document.getElementById("part-four").innerHTML =`<p> ${image}   </p>`

})
 document.getElementById("part-tree").style.display = 'none';
 document.getElementById("part-four").style.display = 'block';
  })
});

*/