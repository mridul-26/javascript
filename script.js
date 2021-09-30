let sec = 0;
let min = 0;
let hr = 0;

function Startwatch() {
    sec++;
    if (sec/60 === 1) {
        sec = 0;
        min++;
    }
    if (min/60 === 1) {
        min = 0;
        hr++;
    }
    document.getElementById('time').innerHTML = hr + ' : ' + min + ' : ' + sec;
}

function trigger(param) {
    console.log(param);
    if (param === 'Start') {
       interval = window.setInterval(Startwatch,1000);
       document.getElementById('StartStop').innerHTML = 'Stop'; 
    }
    else if (param === 'Stop') {
        window.clearInterval(interval);
        document.getElementById('StartStop').innerHTML = 'Start';
    }
}

function reset() {
    sec = 0;
    min = 0;
    hr = 0;
    trigger('Stop');
    document.getElementById('time').innerHTML = '00 : 00 : 00';
}