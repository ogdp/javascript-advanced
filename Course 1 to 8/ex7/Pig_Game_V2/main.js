const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const arrImg = [
  "dice-1.png",
  "dice-2.png",
  "dice-3.png",
  "dice-4.png",
  "dice-5.png",
  "dice-6.png",
];
let numClick = 0;
let numCurent = 0;
const score = {
  player1: 0,
  player2: 0,
  current1: 0,
  current2: 0,
};
$(".rollDice").onclick = () => {
  if (numClick >= 3) {
    score.player1 = score.current1;
    score.player2 = score.current2;
    getScore();
    defaultDisplay();
    numClick = 0;
    win();
  } else {
    let i = Math.trunc(Math.random() * 6 + 1);
    $(".img").src = `./images/${arrImg[i - 1]}`;
    if ($(".numCurrent.active").classList[1] == "left") {
      score.current1 = parseInt($(".numCurrent.active").textContent);
      numCurent = parseInt($(".numCurrent.active").textContent) + i;
      $(".numCurrent.active").innerHTML = numCurent;
      score.current1 = numCurent;
      setCountAround(0);
    } else {
      score.current2 = parseInt($(".numCurrent.active").textContent);
      numCurent = parseInt($(".numCurrent.active").textContent) + i;
      $(".numCurrent.active").innerHTML = numCurent;
      score.current2 = numCurent;
      setCountAround(1);
    }
    ++numClick;
    win();
  }
};
$(".closeTab").onclick = () => {
  $(".notification").classList.remove("active");
  disableBtn(0);
};
$(".hold").onclick = () => {
  getScore();
  defaultDisplay();
  numClick = 0;
};
function getScore() {
  score.player1 = score.current1;
  score.player2 = score.current2;
  $(".score.player1").innerHTML = score.player1;
  $(".score.player2").innerHTML = score.player2;
}
$(".newGame").onclick = () => {
  disableBtn(1);
  $(".img").src = ``;
  $(".player.left").classList.add("active");
  $(".player.right").classList.remove("active");
  $(".numCurrent.left").classList.add("active");
  $(".numCurrent.right").classList.remove("active");
  score.player1 = 0;
  score.player2 = 0;
  score.current1 = 0;
  score.current2 = 0;
  numCurent = 0;
  $$(".score").forEach((element) => {
    element.innerHTML = 0;
  });
  $$(".numCurrent").forEach((element) => {
    element.innerHTML = 0;
  });
  if ($(".countClick.left").querySelector(".around") != undefined) {
    $(".countClick.left")
      .querySelectorAll(".around")
      .forEach((element) => {
        element.remove();
      });
  }
  if ($(".countClick.right").querySelector(".around") != undefined) {
    $(".countClick.right")
      .querySelectorAll(".around")
      .forEach((element) => {
        element.remove();
      });
  }
};
function defaultDisplay() {
  if ($(".player.left.active")) {
    $(".player.right").classList.add("active");
    $(".player.left").classList.remove("active");
    $(".numCurrent.right").classList.add("active");
    $(".numCurrent.left").classList.remove("active");
  } else {
    $(".player.left").classList.add("active");
    $(".player.right").classList.remove("active");
    $(".numCurrent.left").classList.add("active");
    $(".numCurrent.right").classList.remove("active");
  }
}
function win() {
  if (score.current1 >= 30 || score.current2 >= 30) {
    if (score.current1 > score.current2) {
      $(".scoreWin").textContent = score.current1;
      $(".notification").classList.add("active");
    } else {
      $(".scoreWin").textContent = score.current2;
      $(".notification").classList.add("active");
    }
  }
}
function setCountAround(e) {
  if (e == 0) {
    if ($(".countClick.right").querySelector(".around") != undefined) {
      $(".countClick.right")
        .querySelectorAll(".around")
        .forEach((element) => {
          element.remove();
        });
    }
    let span = document.createElement("span");
    span.className = "around";
    $(".countClick.left").appendChild(span);
  } else {
    if ($(".countClick.left").querySelector(".around") != undefined) {
      $(".countClick.left")
        .querySelectorAll(".around")
        .forEach((element) => {
          element.remove();
        });
    }
    let span = document.createElement("span");
    span.className = "around";
    $(".countClick.right").appendChild(span);
  }
}
function disableBtn(e) {
  if (e == 0) {
    $(".hold").setAttribute("disabled", "");
    $(".rollDice").setAttribute("disabled", "");
    $(".hold").classList.add("disable");
    $(".rollDice").classList.add("disable");
  } else {
    $(".hold").removeAttribute("disabled", "");
    $(".rollDice").removeAttribute("disabled", "");
    $(".hold").classList.remove("disable");
    $(".rollDice").classList.remove("disable");
  }
}

$$(".name").forEach((element) => {
  element.addEventListener("click", () => {
    if (
      element.textContent == "PLAYER 1" ||
      element.textContent == "PLAYER 2"
    ) {
      if ($(".rollDice.disable") == null) {
        let nameUser = prompt("Nhập vào tên người chơi");
        if (nameUser !== null) {
          if (nameUser.length >= 3) {
            nameUser = nameUser.replace("  ", "");
            element.innerHTML = nameUser.slice(0, 16);
          }
        }
      }
    }
  });
});
