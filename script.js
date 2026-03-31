// FAQ Toggle
document.querySelectorAll(".faq button").forEach(btn => {
  btn.addEventListener("click", () => {
    let p = btn.nextElementSibling;
    p.style.display = p.style.display === "block" ? "none" : "block";
  });
});
