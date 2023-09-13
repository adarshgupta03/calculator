let input = document.querySelector(".input");
let string = "";
let button = document.querySelectorAll(".b");
Array.from(button).forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      input.value = string;
    } else {
      string = string + e.target.innerHTML;
      input.value = string;
    }
  });
});
