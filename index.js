const input = document.getElementById("email");
const errorText = document.getElementById("errorText");

input.addEventListener("blur", () => {
  const isValidEmail = isValidEmailAddress(input.value);

  if (isValidEmail) {
    input.classList.remove("error");
    errorText.style.display = "none";
  } else {
    input.classList.add("error");
    errorText.style.display = "block";
  }
});

function isValidEmailAddress(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
