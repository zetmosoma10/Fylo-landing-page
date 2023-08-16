const heroInput = document.getElementById("heroInput");
const heroErrorText = document.getElementById("heroErrortext");
const calloutInput = document.getElementById("calloutInput");
const calloutErrorText = document.getElementById("calloutErrorText");

heroInput.addEventListener("blur", () => {
  const isValidEmail = isValidEmailAddress(heroInput.value);

  if (isValidEmail) {
    heroInput.classList.remove("error");
    heroErrorText.style.display = "none";
  } else {
    heroInput.classList.add("error");
    heroErrorText.style.display = "block";
  }
});

calloutInput.addEventListener("blur", () => {
  const isValidEmail = isValidEmailAddress(calloutInput.value);

  if (isValidEmail) {
    calloutInput.classList.remove("error");
    calloutErrorText.style.display = "none";
  } else {
    calloutInput.classList.add("error");
    calloutErrorText.style.display = "block";
  }
});

function isValidEmailAddress(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
