const result = document.querySelector("h2");
const dob = document.querySelector("#dob");
const calculate = document.querySelector("#btn")


function calculateAge() {
    const birthdayValue = dob.value;
    if (birthdayValue === "") {
      alert("Please enter your birthday");
    } else {
      const age = getAge(birthdayValue);
      result.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
  }
  
  function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
  
    if (
      month < 0 ||
      (month === 0 && currentDate.getDate() < birthdayDate.getDate())
    ) {
      age--;
    }
  
    return age;
  }


  calculate.addEventListener("click",calculateAge);
