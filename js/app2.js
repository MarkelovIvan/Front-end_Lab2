document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".logo");
  const sidebar = document.querySelector(".sidebar");
  function toggleVisibility() {
    const isVisible = sidebar.style.display === "block";
    sidebar.style.display = isVisible ? "none" : "block";
  }
  logo.addEventListener("click", toggleVisibility);
});
