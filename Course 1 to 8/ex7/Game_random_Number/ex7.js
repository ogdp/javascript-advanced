let ScoreValue = 20;
let hightScore = 0;
document.querySelector("#hightScore").innerHTML =
  localStorage.getItem("HightScore") == undefined
    ? 0
    : localStorage.getItem("HightScore");
document.querySelector("#check").addEventListener("click", () => {
  if (ScoreValue == 0) {
    document.querySelector("#checkLoss").innerHTML = "You was loss !";
    Score.innerHTML = ScoreValue;
    if (confirm("Reload page play game new") == true) {
      window.location.reload();
    }
  } else {
    let numRandom = Math.trunc(Math.random() * 20) + 1;
    document.querySelector("#randomNumber").textContent = numRandom;
    inputNumber = document.querySelector("#inputNumber").value;
    let Score = document.querySelector("#Score");
    Score.innerHTML = ScoreValue;
    if (inputNumber == "") {
      alert("Input error !!!!");
      document.querySelector("#thongBao").textContent = "Error Number Input...";
    } else {
      if (numRandom == inputNumber) {
        document.querySelector("section").style.backgroundColor =
          "rgb(14 143 6)";
        hightScore = hightScore + ScoreValue;
        document.querySelector("#hightScore").innerHTML = hightScore;
        alert("You have received 1 super car 🚀🚀🚀 ");
        if (localStorage.getItem("HightScore") == undefined) {
          localStorage.setItem(
            "HightScore",
            document.querySelector("#hightScore").textContent
          );
        }
        if (
          localStorage.getItem("HightScore") <
          document.querySelector("#hightScore").textContent
        ) {
          value = document.querySelector("#hightScore").textContent;
          localStorage.removeItem("HightScore");
          localStorage.setItem("HightScore", value);
        }
      } else if (inputNumber < numRandom) {
        document.querySelector("#thongBao").textContent =
          "📈 Number too small...";
        document.querySelector("section").style.backgroundColor =
          "rgb(29, 29, 29)";
      } else if (inputNumber > numRandom) {
        document.querySelector("#thongBao").textContent =
          "📉 Number too big...";
        document.querySelector("section").style.backgroundColor =
          "rgb(29, 29, 29)";
      }
      ScoreValue--;
    }
  }
});
