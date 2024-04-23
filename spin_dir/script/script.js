const $map = document.querySelector(".map");
const $nodes = document.querySelectorAll(".node");
const $nodes1 = document.querySelectorAll(".node1");
const $introModal2 = document.getElementById("introModal2");
const $introModal = document.getElementById("introModal");

const $introModalBackground = document.getElementById("introModalBackground");
const $introModalClose = document.getElementById("introModalClose");
const $introModalTitle = document.getElementById("introModalTitle");
const $introModalDescription = document.getElementById("introModalDescription");
const $introModalIcon = document.getElementById("introModalIcon");
const $introModalPrev = document.getElementById("introModalPrev");
const $introModalNext = document.getElementById("introModalNext");

const $introModalBackground2 = document.getElementById("introModalBackground2");
const $introModalClose2 = document.getElementById("introModalClose2");
const $introModalTitle2 = document.getElementById("introModalTitle2");
const $introModalDescription2 = document.getElementById("introModalDescription2");
const $introModalIcon2 = document.getElementById("introModalIcon2");
const $introModalPrev2 = document.getElementById("introModalPrev2");
const $introModalNext2 = document.getElementById("introModalNext2");

let moduleData = [];
let moduleData2 = [];

let currentIndex = 0;
let maxIndex = 11;

// Close event binding
[$introModalBackground, $introModalClose].forEach((elem) => {
  elem.addEventListener("click", () => {
    $introModal.classList.remove("is-active");
  });
});

[$introModalBackground2, $introModalClose2].forEach((elem) => {
  elem.addEventListener("click", () => {
    $introModal2.classList.remove("is-active");
  });
});

$introModalPrev.addEventListener("click", () => {
  showModal(currentIndex > 0 ? currentIndex - 1 : maxIndex);
});

$introModalPrev2.addEventListener("click", () => {
  showModal(currentIndex > 0 ? currentIndex - 1 : maxIndex);
});

$introModalNext.addEventListener("click", () => {
  showModal(currentIndex < maxIndex ? currentIndex + 1 : 0);
});

$introModalNext2.addEventListener("click", () => {
  showModal(currentIndex < maxIndex ? currentIndex + 1 : 0);
});

// Bind events to all module nodes
$nodes.forEach(($node) => {
  // Store module data in array
  moduleData[$node.dataset.index] = JSON.parse($node.dataset.info);

  // Click
  $node.addEventListener("click", () => {
    showModal($node.dataset.index);
  });
});

$nodes1.forEach(($node1) => {
  // Store module data in array
  moduleData2[$node1.dataset.index] = JSON.parse($node1.dataset.info);

  // Click
  $node1.addEventListener("click", () => {
    showModal2($node1.dataset.index);
  });
});

const showModal = (index) => {
  currentIndex = Number(index);
  const data = moduleData[currentIndex];

  $introModalTitle.innerText = data.subtitle || data.title;
  $introModalDescription.src = `../assets/data/${data.image}`;
  // $introModalDescription2.src = `.../assets/data/${data.image}`;

  $introModalIcon.className = `fas fa-${data.icon} fa-8x`;
  $introModal.classList.add("is-active");

  if (isOverflowing($introModalDescription)) {
    $introModalDescription.classList.add("is-overflowing");
  } else {
    $introModalDescription.classList.remove("is-overflowing");
  }

};

const showModal2 = (index) => {
  currentIndex = Number(index);
  const data = moduleData2[currentIndex];

  $introModalTitle2.innerText = data.subtitle || data.title;
  $introModalDescription2.src = `../../assets/data/${data.image}`;

  $introModalIcon2.className = `fas fa-${data.icon} fa-8x`;
  $introModal2.classList.add("is-active");

  if (isOverflowing($introModalDescription2)) {
    $introModalDescription2.classList.add("is-overflowing");
  } else {
    $introModalDescription2.classList.remove("is-overflowing");
  }
};

const isOverflowing = (elem) => {
  return elem.scrollHeight > elem.clientHeight;
};

window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});
