const navItems = document.querySelectorAll(".nav-item");
const btnAboutMe = document.querySelectorAll(".btn-about-me");
const btnTop = document.querySelector(".top");

navItems.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    el.classList.add("active");
  });
  el.addEventListener("mouseleave", () => {
    el.classList.remove("active");
  });

  el.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelector(el.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

btnAboutMe.forEach((el) => {
  el.addEventListener("click", () => {
    const ye = el.closest(".card");
    ye.classList.toggle("show");
  });
});

btnTop.addEventListener("click", (e) => {
  e.preventDefault();
  document
    .querySelector(btnTop.getAttribute("href"))
    .scrollIntoView({ behavior: "smooth" });
});
