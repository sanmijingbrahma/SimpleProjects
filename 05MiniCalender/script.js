let dateEl = document.querySelector("#date")
let dayEl = document.querySelector("#day")
let monthEl = document.querySelector("#month")
let yearEl = document.querySelector("#year")

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let date = new Date();

dateEl.innerHTML = date.getDate()
dayEl.innerHTML = date.toLocaleString('en', { weekday: "long" })
monthEl.innerHTML = date.toLocaleDateString("en", { month: "long" })
yearEl.innerHTML = date.getFullYear();