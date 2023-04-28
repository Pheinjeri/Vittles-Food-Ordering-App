// const express = require('express')
// const app = express()

// const myExpress = require('express');
const app = myExpress();

const port = 5500


app.get('/', (req, res) => {
  res.json({ message: 'Empty!' });
});


app.listen(5500, () => {
  console.log(`Server running at http://localhost:${5500}`)
})

try {
  const module = require('/home/pheinjeri/Development/code/Vittles-Food-Ordering-App/server.js');
  // your code using the module
} catch (error) {
  console.error(error);
}



const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");

// hamburger.addEventListener("click", () => {
//   navbar.classList.toggle("show");
// });
const header = document.querySelector('.header');
const scrollLink = document.querySelectorAll('.navbar a:not(:last-child)');

Array.from(scrollLink).map((link) => {
  link.addEventListener('click', (e) => {
    // Prevent Default
    e.preventDefault();

    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 90;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth',
    });
    navbar.classList.remove('show');
  });
});


const scrollTop = document.querySelector(".scroll-top");

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", (e) => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 300) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});

const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.style.display = "none";
  }, 2000);
});
