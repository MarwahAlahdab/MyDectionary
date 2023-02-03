/*!
* Start Bootstrap - New Age v6.0.6 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});





let audio;
/// get word from user
     document.getElementById("submit").onclick= function search(){
        var word = document.getElementById("word").value;
     //   console.log(word)
  if( word !== ""){
        getData(word);
        }
        else
        alert("Something went wrong! please try again");
     }






//fetch URL
     async function getData(word ){
     
        document.querySelector(".info-text").style.color = "#989898";
        document.querySelector(".info-text").innerHTML = `Searching the meaning of <span>"${word}"</span>`;
             const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"+word;
             const data = await fetch(url);
             const response = await data.json();
             
            
             try{
            
               details(response);
              
            }
            catch(e){
               document.querySelector(".info-text").innerHTML = `Can't find the meaning of <span>"${word}"</span>. Please, try to search for another word.`;
           };
   
     }





//display response in a list
     function details(response){
  
      document.getElementById("xxx").innerHTML = "";
       
      audio = new Audio(response[0].phonetics[0].audio);

      let definitions = response[0].meanings[0].definitions[0];
      let phonetics = `${response[0].meanings[0].partOfSpeech}  /${response[0].phonetics[0].text}/`;
   
        const word =`<span>Details:</span><li>${response[0].word}</li>
        <li>${phonetics}</li><hr>
        <span>Meaning:</span><li>${definitions.definition}</li><hr>
        <span>Example:</span><li>${definitions.example}</li>`;
        
       
       document.getElementById("xxx").insertAdjacentHTML('beforeend',word);
     
     
       
    }
    




    document.getElementById("word").addEventListener("keyup", e =>{
      let word = e.target.value.replace(/\s+/g, ' ');
      if(e.key == "Enter" && word){
        
         getData(word);
       

      }
  });





  document.querySelector("#volumeIcon").addEventListener("click", ()=>{
      document.querySelector("#volumeIcon").style.color = "#4D59FB"; 
      try{
      audio.play();}
      catch(e){
         console.log(e);
      }
      setTimeout(() =>{
         document.querySelector("#volumeIcon").style.color = "#999";
      }, 800);
  });
  
     




