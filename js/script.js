// PROBLEMA: Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

const container = document.querySelector('div.c-square');
for(let i=1; i<=100; i++){
    let element;
    
    if(i%5 == 0 && i%3 == 0){
        element=`<div class="sq-red d-flex justify-content-center align-items-center">${'FizzBuzz'}</div>`;
    }
    else if(i%3 == 0){
        element=`<div class="sq-green d-flex justify-content-center align-items-center">${'Fizz'}</div>`;
    }
    else if(i%5 == 0){
        element=`<div class="sq-blue d-flex justify-content-center align-items-center">${'Buzz'}</div>`;
    }
    else{
        element=`<div class="sq-empty d-flex justify-content-center align-items-center">${i}</div>`;
    }
    
    console.log(element);
    container.innerHTML += element;
}