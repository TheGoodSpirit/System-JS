let time = document.getElementById('time');
let toggleBtn = document.getElementById('btn')
let section  = document.getElementById('section')
time.style.userSelect = "none";

function currentTime() {
    let date = new Date();

    let hrs = date.getHours();
    let min = date.getMinutes();    
    let sec = date.getSeconds();

    if(hrs > 10 || min > 10 || sec >10) {
        time.textContent = ` ${addZero(hrs)} : ${addZero(min)} : ${addZero(sec)}`;
    }
}

setInterval(currentTime, 100);

const  addZero =  (num) => {
    return num >= 10 ? num : `0${num}`
}

// Dark mode
let initialMode = localStorage.getItem("mode");
section.classList.add(initialMode)

toggleBtn.onclick = () => {
    initialMode = localStorage.getItem("mode");

    if (initialMode === "dark") {
        section.classList.remove("dark")
        localStorage.setItem("mode", "light") 
    }  else {
        section.classList.add("dark")
        localStorage.setItem("mode", "dark") 
    }  
}