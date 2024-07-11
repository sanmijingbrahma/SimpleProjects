
const calculate = document.querySelector("button");
const total = document.querySelector("h4");

calculate.addEventListener("click", () => {
    const bill = parseFloat(document.querySelector("#bill").value);
    const percentage = parseFloat(document.querySelector("#percentage").value);

    const sum = (bill * (1+percentage/100));
    console.log(sum);

    total.innerText = sum.toFixed(2);
})
