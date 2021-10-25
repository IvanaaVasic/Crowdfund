const projectBtn = document.querySelector(".project-button");
const modal = document.querySelector(".modal");
const closebtn = document.querySelector(".close-btn");
const bambooBtn = document.querySelector(".bamboo-btn");
const radioBamboo = document.getElementById("bamboo");
const blackEditionBtn = document.querySelector(".black-edition-btn");
const radioBlackEdition = document.getElementById("black");
const radioNoReward = document.getElementById("noReward");

projectBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closebtn.addEventListener("click", () => {
  modal.style.display = "none";
});

function checkedRadioBtn() {
  const bambooCard = document.querySelector(".bamboo-card");
  const bambooHidden = document.querySelector(".bamboo-hidden-conntainer");
  const blackCard = document.querySelector(".black-card");
  const blackHidden = document.querySelector(".black-hidden-conntainer");
  const noRewardCard = document.querySelector(".noReward-card");
  const noRewardHidden = document.querySelector(".no-reward-hidden-conntainer");

  if (radioBamboo.checked) {
    bambooCard.style.border = "1px solid var(--mint)";
    bambooHidden.style.display = "flex";
    blackCard.style.border = "1px solid rgba(0, 0, 0, 0.15)";
    blackHidden.style.display = "none";
    noRewardCard.style.border = "1px solid rgba(0, 0, 0, 0.15)";
    noRewardHidden.style.display = "none";
  } else if (radioBlackEdition.checked) {
    blackCard.style.border = "1px solid var(--mint)";
    blackHidden.style.display = "flex";
    bambooCard.style.border = "1px solid rgba(0, 0, 0, 0.15)";
    bambooHidden.style.display = "none";
    noRewardCard.style.border = "1px solid rgba(0, 0, 0, 0.15)";
    noRewardHidden.style.display = "none";
  } else if (radioNoReward.checked) {
    noRewardCard.style.border = "1px solid var(--mint)";
    noRewardHidden.style.display = "flex";
    bambooCard.style.border = "1px solid rgba(0, 0, 0, 0.15)";
    bambooHidden.style.display = "none";
    blackCard.style.border = "1px solid rgba(0, 0, 0, 0.15)";
    blackHidden.style.display = "none";
  }
}

bambooBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  radioBamboo.checked = true;
  checkedRadioBtn();
});

blackEditionBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  radioBlackEdition.checked = true;
  checkedRadioBtn();
});

radioBamboo.addEventListener("change", checkedRadioBtn);

radioBlackEdition.addEventListener("change", checkedRadioBtn);

radioNoReward.addEventListener("change", checkedRadioBtn);

//treba da uhvatim input value i da na dugme continue
//saberem promenu na glavnoj strani za backed i backers i progress bar
//i da u isto vreme otvorim thanks modal
const totalBacked = document.querySelector(".total-backed");
const totalBackers = document.querySelector(".total-backers");
const progressBar = document.querySelector(".progress-bar");
const modalThanks = document.querySelector(".modal-thanks");

//string u broj backed i backers
const totalBackedNum = Math.round(parseFloat(totalBacked.innerText.replace(",", "")));
const totalBackersNum = Math.round(parseFloat(totalBackers.innerText.replace(",", "")));

//nova vrednost backed i backers
let newTotal = totalBackedNum;
let newTotalBackers = totalBackersNum;

//dugmici za slanje pledge i otvarajne thanks modala
const continueBtnNoReward = document.querySelector(".no-reward-btn-modal");
const continueBtnBamboo = document.querySelector(".bamboo-btn-modal");
const continueBtnBlack = document.querySelector(".black-btn-modal");
const thanksBtn = document.querySelector(".thanks-btn");

continueBtnNoReward.addEventListener("click", () => {
  modalThanks.style.display = "flex";
});

function handleContinueBtnClick(inputSelector, count) {
  modalThanks.style.display = "flex";
  const inputEl = parseInt(document.querySelector(inputSelector).value);
  newTotal += inputEl;
  const newTotalToComma = newTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalBacked.innerText = newTotalToComma;
  newTotalBackers++;
  const newTotalBackersToComma = newTotalBackers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalBackers.innerText = newTotalBackersToComma;
  const progress = newTotal / 1000;
  progressBar.style.width = `${progress}` + "%";
  const countPledgeValue = parseInt(document.querySelector(count).innerText);
  let countTotal = countPledgeValue;
  countTotal--;
  const countTotalToString = countTotal.toString();
  const allCountElements = document.querySelectorAll(count);
  allCountElements.forEach((el) => {
    el.innerText = countTotalToString;
  });
}

continueBtnBamboo.addEventListener("click", () => {
  handleContinueBtnClick(".bamboo-input", ".count-bamboo");
});

continueBtnBlack.addEventListener("click", () => {
  handleContinueBtnClick(".black-input", ".count-black");
});

thanksBtn.addEventListener("click", () => {
  modalThanks.style.display = "none";
  modal.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == modalThanks) {
    modalThanks.style.display = "none";
  }
};

const bookmarkBtn = document.querySelector(".bookmark");

bookmarkBtn.addEventListener("click", () => {
  bookmarkBtn.classList.toggle("bookmark-button");
  bookmarkBtn.classList.toggle("bookmarked-button");

  if (bookmarkBtn.classList.contains("bookmarked-button")) {
    bookmarkBtn.innerText = "Bookmarked";
  } else {
    bookmarkBtn.innerText = "Bookmark";
  }
});

const bookmarkMobileBtn = document.querySelector(".bookmark-mobile-btn");

bookmarkMobileBtn.addEventListener("click", () => {
  bookmarkMobileBtn.classList.toggle("bookmark-mobile");
  bookmarkMobileBtn.classList.toggle("bookmarked-mobile-active");
});
