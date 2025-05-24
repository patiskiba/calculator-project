let displayScreen = document.getElementById("displayInput");

let calculation = [];
let displayedCalculation;

//! Buttons
const buttons = document.querySelectorAll(".buttonsRow input");
console.log(buttons);

//! Button clicking events
for (let button of buttons) {
    button.addEventListener("click", () => {
        console.log(`Clicked ${button.value}`);

        //? Each button press adds to calculation array
        calculation.push(button.value);
        console.log(calculation);

        //? Calculation array turned into string
        displayedCalculation = calculation.join("");
        console.log(displayedCalculation);

        //? Actually display calculation on calculator
        displayScreen.value = displayedCalculation;
    })
}
