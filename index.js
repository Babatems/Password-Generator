const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let generateEl = document.getElementById("generate-el")
let passwordEl = document.getElementById("password-el")
let random1El = document.getElementById("random1-el")
let random2El = document.getElementById("random2-el")

let passwordLength = 15
generatedPasswordOne = "";
generatedPasswordTwo = "";

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    return randomPassword
}


generateEl.addEventListener("click", function() {
    generatedPasswordOne = generateRandomPassword()
    generatedPasswordTwo = generateRandomPassword()
    random1El.textContent = generatedPasswordOne 
    random2El.textContent = generatedPasswordTwo 
})

random1El.addEventListener("click", function() {
    passwordEl.textContent = "Password: " + random1El.textContent
})

random2El.addEventListener("click", function() {
    passwordEl.textContent = "Password: " + random2El.textContent
})