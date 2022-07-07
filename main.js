const blackOverlay = document.querySelector(".black-overlay");
const cancelButton = document.querySelector(".cancel-button");
const contactMeOpen = document.querySelectorAll(".contact-me-open");

const openMenu = document.querySelector(".mob-menu-icon");
const mobMenuLi = document.querySelectorAll(".mob-menu ul li");
const mobMenu = document.querySelector(".mob-menu");
const contentWrapper = document.querySelector(".content-wrapper");
const body = document.querySelector("body");
const menuSpan1 = document.querySelector(".mob-menu-icon span:nth-of-type(1)");
const menuSpan2 = document.querySelector(".mob-menu-icon span:nth-of-type(2)");
const menuSpan3 = document.querySelector(".mob-menu-icon span:nth-of-type(3)");

// OPENING & CLOSING MOBILE MENU
openMenu.addEventListener("click", () => {
  //OPEN
  if (mobMenu.style.display == "none") {
    mobMenu.style.display = "flex";
    contentWrapper.style.filter = "blur(20px)";
    contentWrapper.style.opacity = "0.6";
    setTimeout(() => {
      mobMenu.style.opacity = "1";
    }, 100);
    body.style.overflow = "hidden";
    menuSpan1.style.opacity = "0";
    menuSpan3.style.opacity = "0";
    menuSpan2.style.width = "90%";
    menuSpan2.style.transform = "rotate(45deg)";
    //CLOSE
  } else {
    mobMenu.style.opacity = "0";
    contentWrapper.style.filter = "";
    contentWrapper.style.opacity = "1";
    mobMenu.style.display = "none";
    setTimeout(() => {
      mobMenu.style.display = "none";
    }, 200);
    body.style.overflow = "scroll";
    menuSpan1.style.opacity = "1";
    menuSpan3.style.opacity = "1";
    menuSpan2.style.width = "100%";
    menuSpan2.style.transform = "rotate(0deg)";
  }
});

// HIDING MOBILE MENU AFTER CLICKING LINK IN MENU
mobMenuLi.forEach((li) => {
  li.addEventListener("click", () => {
    mobMenu.style.opacity = "0";
  });
});

// HIDE CONTACT FORM
cancelButton.addEventListener("click", () => {
  blackOverlay.style.display = "none";
});

// OPEN CONTACT FORM
contactMeOpen.forEach((element) => {
  element.addEventListener("click", () => {
    blackOverlay.style.display = "flex";
  });
});
