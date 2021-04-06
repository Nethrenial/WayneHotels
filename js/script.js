var toggler = document.querySelector(".toggler");
var sidebar = document.querySelector(".sidebar");
var drawer = document.querySelector(".drawer");
var closebtn = document.querySelector(".close");
var scrollBoxes = document.querySelectorAll(".scroll-box");
var learnMorebtn = document.querySelector(".learn");

learnMorebtn.addEventListener("click", function (element) {
  clickHandler(element);
});

toggler.addEventListener(
  "click",
  function () {
    toggleMenu();
  },
  { passive: true }
);

closebtn.addEventListener(
  "click",
  function () {
    toggleMenu();
  },
  { passive: true }
);

function toggleMenu() {
  if (toggler.classList.contains("active")) {
    toggler.classList.remove("active");
    sidebar.classList.remove("active");
    drawer.classList.remove("active");
    // closeNav();
  } else {
    toggler.classList.add("active");
    sidebar.classList.add("active");
    drawer.classList.add("active");
    // openNav();
  }
}

window.addEventListener(
  "scroll",
  () => {
    toggleBoxes();
  },
  { passive: true }
);

toggleBoxes();

function toggleBoxes() {
  var triggerBottom = (window.innerHeight / 5) * 4;

  scrollBoxes.forEach(function (scrollBox) {
    var scrollBoxTop = scrollBox.getBoundingClientRect().top;

    if (scrollBoxTop < triggerBottom) {
      scrollBox.classList.add("show");
    } else {
      scrollBox.classList.remove("show");
    }
  });
}

function clickHandler(element) {
  element.preventDefault();
  const href = element.target.getAttribute("href");
  if (href) {
    const offsetTop = document.querySelector(href).offsetTop + 50;
    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  }
}
