function startApp(){
    var btn = document.getElementById("button");
    var btn2 = document.getElementById("button2");
    
        btn.addEventListener("click", myFunction);
        btn2.addEventListener("click", myFunction2);
    
        function myFunction(){
            var txt1 = document.getElementById("txt1").innerHTML;
            var nodo = document.getElementById('txt1');
            var txt2 = document.getElementById("txt2");
            var parrafo = document.querySelector('#txt1 p');
            txt2.innerHTML = txt1;
            nodo.removeChild(parrafo);
    
        }
    
        function myFunction2(){
            var txt1 = document.getElementById("txt1");
            var txt2 = document.getElementById("txt2").innerHTML;
            var nodo = document.getElementById('txt2');
            var parrafo = document.querySelector('#txt2 p');
            txt1.innerHTML=txt2;
            nodo.removeChild(parrafo);
        }
}
/*   
function startApp() {
    'use strict'
    var moveButton = document.getElementById('button');
    var firstContainer = document.querySelector('.first-container');
    var secondContainer = document.querySelector('.second-container');
    var firstText = document.querySelector('.first-text');
    var secondText = document.querySelector('.second-text');
    var position = true;

    function moveText(){
        if(position) {
            secondContainer.appendChild(firstText);
            position = false;
        } else {
            firstContainer.appendChild(firstText);
            position = true;
        }
    }
    moveButton.addEventListener('click', moveText );
}

*/