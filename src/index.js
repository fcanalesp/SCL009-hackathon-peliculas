const girls = document.getElementById("girls");
const boys = document.getElementById("boys");
const unicorns = document.getElementById("unicorns");

formGirlsOne.style.display = 'none';

document.getElementById('btnGirl').addEventListener('click', () => {
   girls.style.display = 'none';
   boys.style.display = 'none';
   unicorns.style.display = 'none';
   timeAnswerGirls.style.display ='none';
   whitAnswerGirls.style.display ='none';
   girlResult.style.display ='none';
   formGirlsOne.style.display = 'block';
})

document.getElementById('btnGirlNext').addEventListener('click', () => {
   girls.style.display = 'none';
   boys.style.display = 'none';
   unicorns.style.display = 'none';
   feelAnswerGirls.style.display = 'none';
   whitAnswerGirls.style.display ='none';
   girlResult.style.display ='none';
   timeAnswerGirls.style.display ='block';
   formGirlsOne.style.display = 'block';
})

document.getElementById('btnGirlFinal').addEventListener('click', () => {
   girls.style.display = 'none';
   boys.style.display = 'none';
   unicorns.style.display = 'none';
   feelAnswerGirls.style.display = 'none'; 
   timeAnswerGirls.style.display ='none';
   girlResult.style.display ='none';
   whitAnswerGirls.style.display ='block';
   formGirlsOne.style.display = 'block';
})

document.getElementById('btnGirlResult').addEventListener('click', () => {
   girls.style.display = 'none';
   boys.style.display = 'none';
   unicorns.style.display = 'none';
   feelAnswerGirls.style.display = 'none'; 
   timeAnswerGirls.style.display ='none'; 
   whitAnswerGirls.style.display ='none';
   formGirlsOne.style.display = 'block';
   girlResult.style.display ='block';
})




   let btnSearch = document.getElementsByTagName("button")[0];
   let data;
   function getanswer(q) {
      $.get("https://www.omdbapi.com/?s=" + q + "&apikey=bc2c026d", function (rawdata) {
         var rawstring = JSON.stringify(rawdata);
         data = JSON.parse(rawstring);

         let title = data.Search[0].Title;
         let image = data.Search[0].Poster;
         let genre = data.Search[0].Genre;
         document.getElementById("respuesta").innerHTML = `<p>${title}</p>
   <img src="${image}"  alt="...">
   <p>${genre}</p>

   `

      });
   }


   btnSearch.addEventListener('click', (e) => {
      e.preventDefault();
      let input = document.getElementsByTagName("input")[0].value;
      getanswer(input)
      console.log(input)

   })
