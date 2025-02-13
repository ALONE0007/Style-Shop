let navMenu = document.getElementById("navMenu");
let closeNavBar = document.getElementById("closeNavBar");

closeNavBar.addEventListener("click", function () {
  navMenu.style.top = "-900px";
});

document
  .querySelector(".custom-element")
  .addEventListener("click", function (event) {
    const element = document.querySelector(".custom-element");
    const rect = element.getBoundingClientRect();

    // Define the approximate dimensions of the ::after pseudo-element
    const afterWidth = 50; // Adjust as needed
    const afterHeight = 20; // Adjust as needed
    const afterLeft = rect.left + rect.width - afterWidth;
    const afterTop = rect.top + rect.height - afterHeight;

    // Check if the click is within the bounds of the ::after element
    if (
      event.clientX >= afterLeft &&
      event.clientX <= afterLeft + afterWidth &&
      event.clientY >= afterTop &&
      event.clientY <= afterTop + afterHeight
    ) {
      navMenu.style.top = "0px";
    }
  });

//// faq ////

let FAQElem = document.querySelectorAll("#faq");

FAQElem.forEach(function (element) {
  element.addEventListener("click", function () {
    FAQElem.forEach(function (item) {
      if (item !== element) {
        item.classList.remove("active-faq");
      } else {
        element.classList.toggle("active-faq");
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img");
    images.forEach(function(img) {
        img.setAttribute("loading", "lazy");
    });
});
