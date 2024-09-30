const errorMsg = document.querySelector(".error-msg");
const errorIcon = document.querySelector(".error-icon");
const submitButton = document.querySelector("button");
const input = document.querySelector("input");
const desktopBanner = document.querySelector(".girl-banner-desktop");
const mobileBanner = document.querySelector(".girl-banner-mobile");

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

input.addEventListener("blur", () => {
  errorIcon.classList.add("hide");
  errorMsg.classList.add("hide");
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
    desktopBanner.classList.add("hide");
    mobileBanner.classList.remove("hide");
  } else {
    desktopBanner.classList.remove("hide");
    mobileBanner.classList.add("hide");
  }
});
