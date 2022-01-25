
function DigitalClock(){
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let timeformat = "AM"

    if(hours == 0 ){
        hours = 12
    }
    else if(hours>12){
        hours = hours-12
        timeformat = "PM"
    }

    hours = hours < 10 ? "0" + hours : hours
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds

    let finalTime = `${hours}:${minutes}:${seconds}`
    
    document.getElementById('clock-time').innerText = finalTime;
    document.getElementById('format').innerText = timeformat
    

    setInterval(DigitalClock, 1000);
}

DigitalClock()
