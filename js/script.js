const t = document.querySelector(".nav-toggles");
const m = document.querySelector(".nav-menu");

if (t && m) {
  t.addEventListener("click", () => {
    m.classList.toggle("open");
  });
}

const b = document.querySelector("#insight-button");
const o = document.querySelector("#insight-output");

if (b && o) {
  b.addEventListener("click", () => {
    o.textContent =
      "Good data analysis turns scattered information into decisions people can trust.";
  });
}

const f = document.querySelector("#contact-form");
const msg = document.querySelector("#form-message");

if (f && msg) {
  f.addEventListener("submit", (e) => {
    e.preventDefault();
    msg.textContent =
      "Thank you. This demo form is ready for hosting integration later.";
    f.reset();
  });
}

document.addEventListener("DOMContentLoaded", function () {

    const bars = document.querySelectorAll(".progress-bar");

    bars.forEach(function(bar,index){

        const width = bar.getAttribute("data-width");

        setTimeout(function(){

            bar.style.width = width;

        }, index * 500);

    });

});

const reveals = document.querySelectorAll(".fade-up");

function revealSections(){

    reveals.forEach((section)=>{

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

window.addEventListener("load", revealSections);