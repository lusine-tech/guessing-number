const inputValue = document.querySelector("#value");
const resultText = document.querySelector(".resultText");
const countNumber = document.querySelector(".countNumber");
const button = document.querySelector("#button");
let count = 0;


button.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    resultText.innerHTML = "random number is: " + randomNumber;
    let inputValue = "";
    if (Number(value.value) < 1 || Number(value.value) > 6) {
        inputValue = "";
        alert("please enter a number from 1 to 6");
    } else {
        inputValue = Number(value.value);
    }

    let guess = new Promise((resolve, reject) => {
        if (inputValue === randomNumber) {
            count = 2;
            resolve(count);
        } else if (Math.abs(inputValue - randomNumber) === 1) {
            count = 1;
            resolve(count);
        } else {
            count = 0;
            reject(count);
        }
    });

    guess.then((arg) => {
        countNumber.innerText = "count number is: " + arg;
    }).catch((val) => {
        countNumber.innerText = "count number is: " + val;
    });
})