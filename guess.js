console.log("Perfect-Guess🤔")

// Generating the secret number using Math.random()
// User can guess the number between 1-20 


let lower = 1;
let upper = 20;
let secret_number = Math.floor(1+(upper-lower)*(Math.random()));
// console.log(secret_number);

// Accessing the  button and input box
let user = document.querySelector("#userGuess");
let checkBtn = document.querySelector("#check");
let created_p_tag = document.querySelector("#createdp")
// console.log(checkBtn);
// console.log(user);

checkBtn.addEventListener("click",function(){

    if(user.value===null || user.value===""){
        alert("Your guess is missing");
    }else{
        let userGuess = user.value;
        // console.log(userGuess);
        
        if(userGuess<secret_number){
            created_p_tag.innerText = "You guess is too low."
            
        }else if(userGuess>secret_number){
            created_p_tag.innerText = "Your guess is too high";
        }else{
            created_p_tag.innerText = `You guessed my secret number: ${secret_number} 🔁 \n Play Again ❗`;
            secret_number = Math.floor(1+(upper-lower)*(Math.random()));   
            // console.log(secret_number)
        }
        user.value = ""
    }
})






