document.getElementById("menu-icon").addEventListener("click", function () {
  document.getElementById("nav-menu").classList.remove("hidden");
});

document.getElementById("close-menu").addEventListener("click", function () {
  document.getElementById("nav-menu").classList.add("hidden");
});

function showTab(index) {
  const tabs = document.querySelectorAll(".tabs ul li");
  const contents = document.querySelectorAll(".tabs-content > div");

  tabs.forEach((tab, i) => {
    tab.classList.toggle("active", i === index);
    contents[i].classList.toggle("active", i === index);
  });
}


