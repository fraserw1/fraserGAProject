// WELCOME MESSAGE
const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const username = urlParams.get("username");

document.querySelector("#welcome").innerText = `Welcome ${username}`;

// MODAL

const exampleModal = document.getElementById("exampleModal")
exampleModal.addEventListener("show.bs.modal", event => {
  // Button that triggered the modal
  const button = event.relatedTarget
  // Extract info from data-bs-* attributes
  const recipient = button.getAttribute("data-bs-whatever")
  // Update the modal's content.
  const modalTitle = exampleModal.querySelector(".modal-title")
  const modalBodyInput = exampleModal.querySelector(".modal-body input")

  modalTitle.textContent = recipient
  modalBodyInput.value = recipient
})