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
  namePlayer1: "PLAYER 1",
  namePlayer2: "PLAYER 2",
};
$(".rollDice").onclick = () => {
  if (numClick >= 3) {
    getScore();
    defaultDisplay();
    numClick = 0;
    win();
    numCurent = 0;
    $(".numCurrent.active").innerHTML = numCurent;
  } else {
    let i = Math.trunc(Math.random() * 6 + 1);
    $(".img").src = `./images/${arrImg[i - 1]}`;
    if ($(".numCurrent.active").classList[1] == "left") {
      numCurent += i;
      score.current1 = numCurent;
      $(".numCurrent.active").innerHTML = numCurent;
      setCountAround(0);
    } else {
      numCurent += i;
      score.current2 = numCurent;
      $(".numCurrent.active").innerHTML = numCurent;
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
  let win1 = 0;
  let cc8 = 0;
  for (let i = 0; i < $$(".score").length; i++) {
    if (parseInt($$(".score")[i].textContent) >= 30) {
      win1++;
      cc8 = i;
    }
  }
  if (win1 == 0) {
    defaultDisplay();
  } else {
    $$(".player")[cc8].classList.add("win");
  }
  numCurent = 0;
  numClick = 0;
  win();
};
function getScore() {
  score.player1 = score.player1 + score.current1;
  score.current1 = 0;
  score.player2 = score.player2 + score.current2;
  score.current2 = 0;
  $(".score.player1").innerHTML = score.player1;
  $(".score.player2").innerHTML = score.player2;
}
$(".newGame").onclick = () => {
  $(".player").classList.remove("win");
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
  numCurent = 0;
  $(".numCurrent.active").innerHTML = numCurent;
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
  if (score.player1 >= 30 || score.player2 >= 30) {
    if (score.player1 > score.player2) {
      $(".scoreWin").textContent = score.player1;
      $(
        ".nameUserWin"
      ).textContent = `💥"${score.namePlayer1}" dành chiến thắng 💯`;
      $(".notification").classList.add("active");
    } else {
      $(".scoreWin").textContent = score.player2;
      $(
        ".nameUserWin"
      ).textContent = `💥"${score.namePlayer2}" dành chiến thắng 💯`;
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
            if (element.textContent == "PLAYER 1") {
              score.namePlayer1 = nameUser.slice(0, 16);
            } else {
              score.namePlayer2 = nameUser.slice(0, 16);
            }
          }
        }
      }
    }
  });
});
