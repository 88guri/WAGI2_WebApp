document.querySelectorAll(".authority").forEach((button) => {
  button.addEventListener("click", function () {
    if (this.classList.contains("admin")) {
      this.classList.remove("admin");
      this.textContent = "일반";
    } else {
      this.classList.add("admin");
      this.textContent = "운영진";
    }
  });
});
