const shareBtn = document.getElementById("button");
const cardShare = document.querySelector(".card__share");

shareBtn.addEventListener("click", () => {
  shareBtn.classList.toggle("active");
  cardShare.classList.toggle("show");
});
