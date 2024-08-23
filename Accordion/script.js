document.querySelectorAll(".icon").forEach((element) =>
  element.addEventListener("click", () => {
    element.parentElement.classList.toggle("open");
  })
);
