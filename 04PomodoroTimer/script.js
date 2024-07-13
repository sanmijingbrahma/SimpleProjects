const CountDown = document.querySelector("#timer")
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset")


let PomoTime = 1800;
let interval;

function updateTimer() {
    let miniutes = Math.floor(PomoTime / 60);
    let seconds = (PomoTime % 60);
    let formattedTime = `${miniutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    CountDown.innerHTML=formattedTime;
}

function setTimer(){
    interval = setInterval(()=>{
        PomoTime --;
        updateTimer();
        if(PomoTime === 0){
            clearInterval(interval);
            PomoTime = 1800;
            updateTimer();
        }
    },1000)
}

function stopTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    PomoTime=1800;
    updateTimer();
}



start.addEventListener("click",()=>{
    stopTimer();
    setTimer();
});

stop.addEventListener("click",()=>{
    stopTimer();
});

reset.addEventListener("click",()=>{
    resetTimer()
})

