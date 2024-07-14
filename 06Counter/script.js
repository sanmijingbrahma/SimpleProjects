const countEl = document.querySelector("h2");
const addEl = document.querySelector("#add")
const subEl = document.querySelector("#sub");
const resetEl = document.querySelector("#reset");

let num = 0;

addEl.addEventListener("click", () => {
    countEl.innerHTML = (num += 1);
    if (num > 0) {
        countEl.style.color = "green";
    } else if (num < 0) {
        countEl.style.color = "red";
    } else {
        countEl.style.color = "black";
    }

})

resetEl.addEventListener("click", () => {
    num = 0;
    countEl.innerHTML = num;
    countEl.style.color = "black"
})

subEl.addEventListener("click", () => {
    countEl.innerHTML = (num -= 1);
    if (num > 0) {
        countEl.style.color = "green";
    } else if (num < 0) {
        countEl.style.color = "red";
    } else {
        countEl.style.color = "black";
    }
})

