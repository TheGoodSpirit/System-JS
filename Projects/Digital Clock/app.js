let Hrs = document.getElementById('hrs');
let Min = document.getElementById('min');
let Sec = document.getElementById('sec');
let Period = document.getElementById('period');


let toggleBtn = document.getElementById('btn')
let section  = document.getElementById('section')

function currentTime() {
    let date = new Date();

    let hrs = date.getHours()
    let min = date.getMinutes();    
    let sec = date.getSeconds();

    let period = "AM";
    if (hrs >= 12) {
        period = "PM";
        // hrs = hrs - 12;
    }

    if(hrs > 10 || min > 10 || sec >10) {
        Hrs.textContent = ` ${addZero(hrs)} `;
        Min.textContent = ` ${addZero(min)} `;
        Sec.textContent = ` ${addZero(sec)} `;
        Period.textContent = `${period}`; 
    }

}

setInterval(currentTime, 1000);

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