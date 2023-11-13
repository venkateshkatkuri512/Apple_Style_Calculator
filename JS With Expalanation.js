/** @format */
/** @format */

document.addEventListener("DOMContentLoaded", function () {
  let input = document.getElementById("result");
  let buttons = document.querySelectorAll("button");
  let string = "";
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonText = button.innerHTML;
      switch (buttonText) {
        case "AC":
          string = "";
          break;

        case "DEL":
          string = string.slice(0, -1);
          break;

        case "=":
          string = eval(string);
          break;

        default:
          string += buttonText;
          break;
      }

      input.value = string;
    });
  });
});
