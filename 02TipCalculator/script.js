
const calculate = document.querySelector("button");
const total = document.querySelector("h4");

calculate.addEventListener("click", () => {
    const bill = parseInt(document.querySelector("#bill").value);
    const percentage = parseInt(document.querySelector("#percentage").value);

    const sum = (bill+(bill*(percentage/bill)));

    total.innerText = sum;
})
