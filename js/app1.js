document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".logo");
  const sidebar = document.querySelector(".sidebar");
  const trends = document.querySelector(".trends");
  function toggleVisibility() {
    const isVisible = sidebar.style.display === "block";
    sidebar.style.display = isVisible ? "none" : "block";
    trends.style.display = isVisible ? "none" : "block";
  }
  logo.addEventListener("click", toggleVisibility);
});
