const emailInput = document.querySelector("#emailInput");
const hiddenSpan = document.querySelector(".hidden");
const form = document.querySelector("#container-card");

emailInput.addEventListener("input", () => {
  const { value } = emailInput;

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(value)) {
    console.log("success");
    if (emailInput.classList.contains("deny")) {
      emailInput.classList.remove("deny");
    }

    hiddenSpan.classList.add("hidden");
  } else {
    emailInput.classList.add("deny");
    console.log("fail");

    if (hiddenSpan.classList.contains("hidden")) {
      hiddenSpan.classList.remove("hidden");
    }
  }
});

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  const span = document.querySelector(".bold-email");
  const successCard = document.querySelector("#success-card");

  const email = emailInput.value;

  span.innerHTML = email;

  successCard.style.display = "block";
  form.style.visibility = "hidden";
}

const dismissMessage = document.querySelector(".dismiss-message");

dismissMessage.addEventListener("click", () => {
  const successCard = document.querySelector("#success-card");

  successCard.style.display = "none";
  form.style.visibility = "visible";
});
