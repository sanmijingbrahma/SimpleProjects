const AnswerEl = document.querySelector("#calculations");

const nums = ["0","1","2","3","4","5","6","7","8","9"];

let solutionEl = 0;

// operators
const clearEl = document.querySelector("#clear")
const divideEl = document.querySelector("#divide")
const mulEl = document.querySelector("#mul")
const subEl = document.querySelector("#sub")
const addEl = document.querySelector("#add")
const equalEl = document.querySelector("#equal")

// numbers
const sevenEl = document.querySelector("#seven")
const eightEl = document.querySelector("#eight")
const nineEl = document.querySelector("#nine")
const fourEl = document.querySelector("#four")
const fiveEl = document.querySelector("#five")
const sixEl = document.querySelector("#six");
const oneEl = document.querySelector("#one")
const twoEl = document.querySelector("#two")
const threeEl = document.querySelector("#three")
const zeroEl = document.querySelector("#zero")


zeroEl.addEventListener("click", () => {
    AnswerEl.value += nums[0]
})

oneEl.addEventListener("click", () => {
    AnswerEl.value += nums[1]
})

twoEl.addEventListener("click", () => {
    AnswerEl.value += nums[2]
})
threeEl.addEventListener("click", () => {
    AnswerEl.value += nums[3]
})
fourEl.addEventListener("click", () => {
    AnswerEl.value += nums[4]
})
fiveEl.addEventListener("click", () => {
    AnswerEl.value += nums[5]
})
sixEl.addEventListener("click", () => {
    AnswerEl.value += nums[6]
})
sevenEl.addEventListener("click", () => {
    AnswerEl.value += nums[7]
})
eightEl.addEventListener("click", () => {
    AnswerEl.value += nums[8]
})
nineEl.addEventListener("click", () => {
    AnswerEl.value += nums[9]
})


clearEl.addEventListener("click", () => {
    AnswerEl.value = '';
})
divideEl.addEventListener("click", () => {
    AnswerEl.value += '/'
})
mulEl.addEventListener("click", () => {
    AnswerEl.value += "*"
})
addEl.addEventListener("click", () => {
    AnswerEl.value += "+"
})
subEl.addEventListener("click", () => {
    AnswerEl.value += "-"
})

console.log(AnswerEl.value)

equalEl.addEventListener("click", () => {




    // AnswerEl.value = ;
})