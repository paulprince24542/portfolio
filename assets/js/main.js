// var toggleBtn = document.getElementById("toggleBtn");
// var header = document.getElementById("header")
// toggleBtn.addEventListener("click", (event) => {
// //   console.log("ergr");
//   header.classList.toggle("mobile-nav-active");
// // header.style.display = "none"
//   //   document.querySelector("body").classList.toggle("bi-list");
//   //   document.querySelector("body").classList.toggle("bi-x");
// });

(function () {
  on("click", ".mobile-nav-toggle", function (e) {
    console.log("erg")
    select("body").classList.toggle("mobile-nav-active");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });
});
