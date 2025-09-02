["./assets/resources/heads.svg", "./assets/resources/tails.svg"].forEach(src => {
  const i = new Image();
  i.src = src; // triggers fetch + puts it in the HTTP cache
});

const button = document.querySelector(".btn");
const image = document.getElementById("coinImg");

button.addEventListener("click", () => {
  button.disabled = true;

  image.classList.remove("flip-animation");
  void image.offsetWidth; 
  image.classList.add("flip-animation");
  
  const result = Math.random() < 0.5 ? "Heads" : "Tails";
  
  const onEnd = () => {
    document.querySelector("#result").textContent = result;
    if (result == "Heads") {
      image.src = "/CoinFlip/assets/resources/heads.svg";
    } else {
      image.src = "/CoinFlip/assets/resources/tails.svg";
    }
    button.disabled = false;  
  }
  
  image.addEventListener("animationend", onEnd, { once: true });

});