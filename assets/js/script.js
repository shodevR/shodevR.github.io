'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
let navToggler = document.querySelector("[data-nav-toggler]");

let toggleNavbar = function () {
  
navbar.classList.toggle("active");
navToggler.classList.toggle("active");
  
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});


// calender

GitHubCalendar(".calendar", "shodevR");

// or enable responsive functionality:
GitHubCalendar(".calendar", "shodevR", { responsive: true });

// Use a proxy
GitHubCalendar(".calendar", "shodevR", {
   proxy (username) {
     return fetch(`https://your-proxy.com/github?user=${shodevR}`)
   }
}).then(r => r.text())

GitHubStatus(".stats", "shodevR", { responsive: true});
GitHubStatus(".stats", "shodevR", { responsive: true });
GitHubStatus(".stats", "shodevR", {
  proxy (username) {
    return fetch(`https://your-proxy.com/github?user=${shodevR}`)
  }
}).then(r => r.text())