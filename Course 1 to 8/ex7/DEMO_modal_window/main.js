const click = document.querySelectorAll(".show-modal");
const closeTab = document.querySelector(".close");
const openTab = document.querySelector(".content");
click.forEach((e) => {
  e.addEventListener("click", () => {
    openTab.classList.add("active");
  });
});
closeTab.onclick = () => {
  openTab.classList.remove("active");
};
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) {
    // Kiểm tra có tồn tại class active trong openTab không bằng contains
    // console.log(openTab.classList.contains("active"));
    if (openTab.classList.contains("active")) {
      openTab.classList.remove("active");
    }
  }
});
