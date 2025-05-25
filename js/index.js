// Smooth scroll to blog section
document.getElementById("exploreBtn").addEventListener("click", () => {
  document.getElementById("blogs").scrollIntoView({ behavior: "smooth" });
});

// Alert on Read More click
document.querySelectorAll(".read-more").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    alert("This blog post will be available soon!");
  });
});

// Change footer text on click
document.getElementById("footerText").addEventListener("click", () => {
  document.getElementById("footerText").textContent =
    "Thanks for visiting! See you again 😊";
});
