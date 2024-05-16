let time = document.getElementById('time');
time.style.userSelect = "none";

setInterval( () => {

    let date = new Date();

    let hrs = date.getHours();
    let min = date.getMinutes();    
    let sec = date.getSeconds();

    if(hrs > 10 || min > 10 || sec >10) {
        time.textContent = ` ${addZero(hrs)} : ${addZero(min)} : ${addZero(sec)}`;
    }
    
}, 100);

const  addZero =  (num) => {
    return num >= 10 ? num : `0${num}`;
}

function changeMode() {
    let section = document.getElementById('section')
    section.classList.toggle('dark')
}