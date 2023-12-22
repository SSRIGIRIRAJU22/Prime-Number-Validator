const numEl = document.querySelector(".num");
const resultsEl = document.querySelector(".results");
const btnEl = document.getElementById("btn");
const clearInputEl = document.querySelector(".clear-input");


clearInputEl.addEventListener("click", ()=>{

  location.reload();

});


btnEl.addEventListener("click", ()=> {


  if (numEl.value == 2) {
    return resultsEl.innerHTML = numEl.value + " is even Prime number";   
  }

  if(numEl.value > 1){

    for (let index = 2; index < numEl.value; index++) {

        if (numEl.value % index == 0){
          return resultsEl.innerHTML = numEl.value + " is not a prime number.";      
        }
    }

    return resultsEl.innerHTML = numEl.value + " is prime number !!";

  } else{
    return resultsEl.innerHTML = numEl.value + " is not a prime number.";
  }

});

