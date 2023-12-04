// let border = document.querySelector(".border");

// border.addEventListener("click",()=>{
//    border.classList.toggle("active")
// });

let input = document.querySelector(".border form input");

let counter = document.querySelector(".border .counter");
let maxLength = input.getAttribute("minlength");

input.onkeyup = ()=>{
    counter.innerHTML = minlength + input.Value.length 
}