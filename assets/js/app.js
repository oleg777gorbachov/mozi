// const div = document.createElement("div");
// const a = document.createElement("a");

// document.body.appendChild(div);
// div.appendChild(a);
// a.innerText = "232";
// console.log(div);

const darkBlue = "#1a2578";
const buttonColor = "#bf0830";
const greyLight = "#e3e7f6";
const grey = "#646a89";

const menu = document.querySelector(".menuLogo");
const menuBurger = document.querySelector(".menuBurger");

const menuLines = document.querySelectorAll(".line");

const menuLine1 = document.querySelector(".menuLine1");
const menuLine2 = document.querySelector(".menuLine2");
const menuLine3 = document.querySelector(".menuLine3");

let menuPositon = 0;

menu.addEventListener("click", () => {
  switch (menuPositon) {
    case 0:
      menuBurger.style.visibility = "inherit";
      menu.style.position = "fixed";
      menu.style.right = "18px";
      menu.style.overflow = "visible";
      document.body.style.overflow = "hidden";
      menuBurger.style.opacity = "1";
      menuLine1.style.transform = "translate(0px, 13px) rotate(45deg)";
      menuLine2.style.transform = "rotate(-45deg)";
      menuLine3.style.opacity = "0";
      menuLines.forEach((e) => {
        e.style.background = "white";
      });
      menuPositon = 1;
      break;
    case 1:
      menuBurger.style.visibility = "hidden";
      menu.style.position = "relative";
      menu.style.right = "0px";
      menu.style.overflow = "visible";
      document.body.style.overflow = "hidden";
      menuBurger.style.opacity = "0";
      menuLine1.style.transform = "translate(0px, 0px) rotate(0deg)";
      menuLine2.style.transform = "rotate(0deg)";
      menuLine3.style.opacity = "1";
      menuLines.forEach((e) => {
        e.style.background = darkBlue;
      });
      menuPositon = 0;
      break;
  }
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
});
