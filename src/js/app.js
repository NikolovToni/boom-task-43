import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  const newMessage = "One new messages";
  setInterval(() => {
    document.querySelector("title").innerHTML = newMessage;
  }, 3000);
});
