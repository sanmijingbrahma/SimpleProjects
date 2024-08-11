const xPosEl = document.querySelector("#xPos")
const yPosEl = document.querySelector("#yPos")

window.addEventListener("mousemove",(e)=>{
    xPosEl.innerHTML = `${e.clientX}`
    yPosEl.innerHTML = `${e.clientY}`
})