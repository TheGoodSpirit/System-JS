let currentColr = document.getElementById("currentColor");
let body = document.querySelector('body');

function changeBackground() {

    // getting random values 
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    currentColr.innerHTML = `rgb( ${red}, ${green}, ${blue})`
    currentColr.style.color = `rgb( ${red}, ${green}, ${blue})`
    body.style.setProperty('background-color', `rgb(${red}, ${green}, ${blue})`);
}
window.onload = () => setInterval(()=>{changeBackground()},100)