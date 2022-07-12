const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const digitalClock = setInterval( function time(){
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    if(h < 10) h = '0' + h;

    if(m < 10) m = '0' + m;
    
    if(s < 10) s = '0' + s;


    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;

});