const texts = document.querySelector(".texts");  
window.SpeechRecognition =  
 window.SpeechRecognition || window.webkitSpeechRecognition;  
const recognition = new SpeechRecognition();  
recognition.interimResults = true;  
let p = document.createElement("p");  
recognition.addEventListener("result", (e) => {  
 texts.appendChild(p);  
 const text = Array.from(e.results)  
  .map((result) => result[0])  
  .map((result) => result.transcript)  
  .join("");  
 p.innerText = text;  
 if (e.results[0].isFinal) {  
  if (text.includes("how are you")) {  
   p = document.createElement("p");  
   p.classList.add("replay");  
   p.innerText = "I am fine";  
   texts.appendChild(p);  
  }  
  if (  
   text.includes("what's your name") ||  
   text.includes("what is your name")  
  ) {  
   p = document.createElement("p");  
   p.classList.add("replay");  
   p.innerText = "My Name is Codewith_random";  
   texts.appendChild(p);  
  }  
  if (text.includes("open my YouTube")) {  
   p = document.createElement("p");  
   p.classList.add("replay");  
   p.innerText = "opening youtube channel";  
   texts.appendChild(p);  
   console.log("opening youtube");  
   window.open("https://www.youtube.com/");  
  }  
  p = document.createElement("p");  
 }  
});  
recognition.addEventListener("end", () => {  
 recognition.start();  
});  
recognition.start();  
recognition.addEventListener("end", () => {  
 recognition.start();  
});  
recognition.start();  
recognition.addEventListener("end", () => {  
 recognition.start();  
});  
recognition.start();  recognition.addEventListener("end", () => {  
 recognition.start();  
});  
recognition.start();  
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Formget" && password == "formget#123"){
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Formget" && password == "formget#123"){
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}

