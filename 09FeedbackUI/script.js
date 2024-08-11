const unhappyEl = document.querySelector("#unhappy")
const neutralEl = document.querySelector("#neutral")
const satisfiedEl = document.querySelector("#satisfied")
const sendReviewEl = document.querySelector("#sendReview")

const responseEl = document.querySelector("#Fwrapper")

const stringResponse = "";

unhappyEl.addEventListener("click",()=>{
    stringResponse = "Unhappy";
})


neutralEl.addEventListener("click",()=>{
    stringResponse = "Neutral";
})

satisfiedEl.addEventListener("click",()=>{
    stringResponse = "Satisfied";
})


const thankyouEl = document.querySelector("#head1")
const feedbackStatusEl = document.querySelector("#emoWrapper")


sendReviewEl.addEventListener(click,()=>{
    thankyouEl.textContent = "Thank You!";
    feedbackStatusEl.textContent = `Feedback : ${stringResponse}`;
    sendReviewEl.textContent = `We'll use your feedback to improve our customer support.`
})