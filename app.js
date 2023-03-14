/* VARIABLES */
let logo = document.querySelectorAll(".logo");

let home = document.querySelectorAll("#homeMenu");
let tech = document.querySelectorAll("#tech");
let works = document.querySelectorAll("#worksMenu");
let about = document.querySelectorAll("#about");
let contact = document.querySelectorAll("#contact");
let menuHome = document.querySelector("#homeMenu");

let D = document.querySelector(".D");
let V = document.querySelector(".S");
let L = document.querySelector(".G");
let P = document.querySelector(".N");
let R = document.querySelector(".R");

let nameContainer = document.querySelectorAll("#name-container");
let nameI = document.querySelector(".name-I");
let nameC = document.querySelector(".name-C");
let nameA = document.querySelector(".name-A");
let nameR = document.querySelector(".name-R");
let nameD = document.querySelector(".name-D");
let nameO = document.querySelector(".name-O");

infoCard = document.querySelector(".info-card");

/* LOGO HOVER ANIMATION */
logo.forEach((letter) => {
  letter.addEventListener("mouseenter", (event) => {
    var t1 = anime.timeline({
      easing: "easeInOutSine",
      duration: 300,
    });
    t1.add({
      targets: ".D, .S, .G, .N",
      translateY: 150,
      opacity: 0,
      delay: anime.stagger(100),
    });
    if (V.innerHTML === "S" && L.innerHTML === "G" && P.innerHTML === "N") {
      V.innerHTML = "V";
      L.innerHTML = "L";
      P.innerHTML = "P";
      t1.add({
        targets: ".D, .S, .G, .N",
        translateY: 0,
        opacity: 1,
        delay: anime.stagger(100),
      });
    } else {
      V.innerHTML = "S";
      L.innerHTML = "G";
      P.innerHTML = "N";
      t1.add({
        targets: ".D, .S, .G, .N",
        translateY: 0,
        opacity: 1,
        delay: anime.stagger(100),
      });
    }

    if (V.innerHTML == "V" && L.innerHTML == "L" && P.innerHTML == "P") {
      V.innerHTML = "V";
      L.innerHTML = "L";
      P.innerHTML = "P";
    }
    if (
      D.style.color == "aliceblue" &&
      V.style.color == "aliceblue" &&
      L.style.color == "aliceblue" &&
      P.style.color == "aliceblue" &&
      nameI.style.color == "aliceblue" &&
      R.style.color == "black"
    ) {
      D.style.color = "black";
      V.style.color = "black";
      L.style.color = "black";
      P.style.color = "black";
      nameI.style.color = "black";
      nameC.style.color = "black";
      nameA.style.color = "black";
      nameR.style.color = "black";
      nameD.style.color = "black";
      nameO.style.color = "black";
      R.style.color = "aliceblue";
    } else {
      D.style.color = "aliceblue";
      V.style.color = "aliceblue";
      L.style.color = "aliceblue";
      P.style.color = "aliceblue";
      nameI.style.color = "aliceblue";
      nameC.style.color = "aliceblue";
      nameA.style.color = "aliceblue";
      nameR.style.color = "aliceblue";
      nameD.style.color = "aliceblue";
      nameO.style.color = "aliceblue";
      R.style.color = "black";
    }
  });
});

/* MENU HOVER ANIMATION */
home.forEach((letter) => {
  letter.addEventListener("mouseenter", (event) => {
    var t2 = anime.timeline({
      easing: "easeInOutSine",
      duration: 100,
    });
    t2.add({
      targets: ".home",
      translateY: -5,
      delay: anime.stagger(40),
    }).add({
      targets: ".home",
      translateY: 0,
      delay: anime.stagger(40),
    });
  });
});
works.forEach((letter) => {
  letter.addEventListener("mouseenter", (event) => {
    var t2 = anime.timeline({
      easing: "easeInOutSine",
      duration: 100,
    });
    t2.add({
      targets: ".works",
      translateY: -5,
      delay: anime.stagger(40),
    }).add({
      targets: ".works",
      translateY: 0,
      delay: anime.stagger(40),
    });
  });
});
about.forEach((letter) => {
  letter.addEventListener("mouseenter", (event) => {
    var t2 = anime.timeline({
      easing: "easeInOutSine",
      duration: 100,
    });
    t2.add({
      targets: ".about",
      translateY: -5,
      delay: anime.stagger(40),
    }).add({
      targets: ".about",
      translateY: 0,
      delay: anime.stagger(40),
    });
  });
});
tech.forEach((letter) => {
  letter.addEventListener("mouseenter", (event) => {
    var t2 = anime.timeline({
      easing: "easeInOutSine",
      duration: 100,
    });
    t2.add({
      targets: ".tech",
      translateY: -5,
      delay: anime.stagger(40),
    }).add({
      targets: ".tech",
      translateY: 0,
      delay: anime.stagger(40),
    });
  });
});
contact.forEach((letter) => {
  letter.addEventListener("mouseenter", (event) => {
    var t2 = anime.timeline({
      easing: "easeInOutSine",
      duration: 100,
    });
    t2.add({
      targets: ".contact",
      translateY: -5,
      delay: anime.stagger(40),
    }).add({
      targets: ".contact",
      translateY: 0,
      delay: anime.stagger(40),
    });
  });
});

logo.forEach((letter) => {
  letter.addEventListener("mouseenter", (event) => {
    if (menuHome.style.color == "aliceblue") {
      menuHome.style.color = "yellow";
    } else {
      menuHome.style.color = "black";
    }
    if (menuHome.style.color == "black") {
      menuHome.style.color = "aliceblue";
    }
  });
});

/* ABOUT TRANSFORMATION */
about.forEach((item) => {
  item.addEventListener("click", (event) => {
    var t3 = anime.timeline({
      ease: "easeInOutSine",
      duration: 1000,
    });
    t3.add({
      targets: ".logo",
      translateY: -200,
    });
    console.log("clicked");
    D.classList.add("hidden");
    V.classList.add("hidden");
    L.classList.add("hidden");
    P.classList.add("hidden");
    nameI.classList.remove("hidden");
    nameC.classList.remove("hidden");
    nameA.classList.remove("hidden");
    nameR.classList.remove("hidden");
    nameD.classList.remove("hidden");
    nameO.classList.remove("hidden");
    infoCard.style.display = "grid";
  });
});

/* NAME CHANGE */
nameContainer.forEach((item) => {
  item.addEventListener("mouseenter", (event) => {
    console.log("hovered");
    if (nameC.innerHTML == "C" && nameA.innerHTML == "A") {
      nameC.innerHTML = "V";
      nameA.innerHTML = "E";
      nameD.innerHTML = "A";
      nameO.classList.add("hidden");
    } else {
      nameC.innerHTML = "C";
      nameA.innerHTML = "A";
      nameD.innerHTML = "D";
      nameO.inneHTML = "O";
      nameO.classList.remove("hidden");
    }
  });
});
