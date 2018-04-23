
  'use strict'
  //1.- Generar un número aleatorio al azar entre 1 y 100
  //2.- Almacemanos el número del usuario para poder comparar con el aleatorio
  //3.- Creamos un bóton para poder comparar cuando click

  let numberRandom = Math.round(getRandom (1,100));
  let button = document.getElementById('tryNumber');
  let counter = 1;
  let history = [];
  let numberUser;
  let newLi;
  let newLiContent;
  let ulHistory = document.getElementById('history');
  let wrapper_history = document.getElementsByClassName('wrapper_history')[0];
  button.addEventListener("click", play); 

  function getRandom ( min, max ){
    return (max - min) * Math.random () + min;
  };
  console.log(numberRandom);

  function addNumber(){
    numberUser = parseInt(document.getElementById('numberUser').value);
    saveNumber();
  }

  function resetInput(){
   document.getElementById('numberUser').value = " ";
  }

 function compare(){
    if(numberUser< numberRandom){
      console.log('eres menor');
    }else if(numberUser=== numberRandom){
      console.log('acertaste');
      counter = 1;
      updateHtmlCounter();
      //play();
    }else{
      console.log('eres mayor');
    }
  }

 function play(){
  if(counter < 3){
    counter++
    addNumber();
    compare();
    showNumberHistory();
    updateHtmlCounter();
    resetInput();
   }else if(counter === 3){
     console.log('has perdido vuelve a intentarlo');
     counter = 1;
     updateHtmlCounter();
     resetInput();
     hideNumberHistory();
   }
 }

 function updateHtmlCounter(){
  document.getElementById('counter').textContent = counter;
 }

 function saveNumber(){
   history.push(numberUser);
 }

 function showNumberHistory(){
    newLi = document.createElement("li"); 
    newLiContent = document.createTextNode(numberUser); 
   newLi.appendChild(newLiContent); 
    ulHistory.appendChild(newLi);
 }

 function hideNumberHistory(){
  ulHistory.remove(newLi);
 }