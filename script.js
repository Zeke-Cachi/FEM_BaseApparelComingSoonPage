const errorMsg = document.querySelector(".error-msg");
const errorIcon = document.querySelector(".error-icon");
const submitButton = document.querySelector("button");
const input = document.querySelector("input");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (!input.checkValidity()) {
    errorIcon.classList.remove("hide");
    errorMsg.classList.remove("hide");
  } else {
    errorIcon.classList.add("hide");
    errorMsg.classList.add("hide");
  }
});
