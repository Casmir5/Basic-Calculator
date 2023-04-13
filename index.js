// get the html elements
let displayScreen = document.querySelector(".answer");
let button = Array.from(document.getElementsByTagName("button"));

//  iterate over the array of button
button.map((button) => {

  // Adds an click event and return the particular button  clicked 
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {

      // remove the whole content of screen
      case "RESET":
        displayScreen.innerText = "";
        break;

      // removes the last value of supplied to the screen
      case "DEL":
        if (displayScreen.innerText) {
          displayScreen.innerText = displayScreen.innerText.slice(0, -1);
        }
        break;

        // solves the the value supplied to the screen and returns the answer
      case "=":
        displayScreen.innerText = eval(displayScreen.innerText);
        break;

        // supplies the value clicked to the screen
      default:
        displayScreen.innerText += e.target.innerText;
    }
  });
});




const myHtml = document.querySelector("html");
const buttons = document.querySelectorAll(".toggle-btn");

console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
    if(this.classList.contains("two")) {
      myHtml.className = "";
      myHtml.classList.add("theme2");
      return;
    }
    if (this.classList.contains("three")) {
      myHtml.className = "";
      myHtml.classList.add("theme3");
      return;
    }
    myHtml.className = "";
  });
}
