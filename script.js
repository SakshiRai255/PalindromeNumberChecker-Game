let btn = document.getElementById('btn');
let userInput = document.getElementById('user-input');
let showResult = document.getElementById('show-result');



btn.addEventListener("click",()=>{
   let userInputValue = userInput.value;
   let  userInputReverseValue = userInputValue.toString().split("").reverse().join("");
   let userInputNumber = userInputValue.toString(); 
   if(userInputNumber == userInputReverseValue){
    showResult.innerText = 'It is Plaindrome'
    }else{
    showResult.innerText = 'It is not a Plaindrome'   
   }
});


