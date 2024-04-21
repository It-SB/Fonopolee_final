const $map = document.querySelector(".map");
const $nodes = document.querySelectorAll(".node");
const $nodes1 = document.querySelectorAll(".node1");
const $introModal1 = document.getElementById("introModal1");
const $introModal = document.getElementById("introModal");

const $introModalBackground = document.getElementById("introModalBackground");
const $introModalClose = document.getElementById("introModalClose");
const $introModalTitle = document.getElementById("introModalTitle");
const $introModalDescription = document.getElementById("introModalDescription");
const $introModalDescription2 = document.getElementById("introModalDescription2");
const $introModalIcon = document.getElementById("introModalIcon");
const $introModalPrev = document.getElementById("introModalPrev");
const $introModalNext = document.getElementById("introModalNext");

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

[$introModalBackground, $introModalClose].forEach((elem) => {
  elem.addEventListener("click", () => {
    $introModal1.classList.remove("is-active");
  });
});

$introModalPrev.addEventListener("click", () => {
  showModal(currentIndex > 0 ? currentIndex - 1 : maxIndex);
});

$introModalNext.addEventListener("click", () => {
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

$nodes.forEach(($node1) => {
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
  $introModalDescription.src = `../../assets/data/${data.image}`;
  $introModalDescription2.src = `../../assets/data/${data.image}`;
  
  $introModalIcon.className = `fas fa-${data.icon} fa-8x`;
  $introModal.classList.add("is-active");

  if (isOverflowing($introModalDescription)) {
    $introModalDescription.classList.add("is-overflowing");
  } else {
    $introModalDescription.classList.remove("is-overflowing");
  }

  if (isOverflowing($introModalDescription2)) {
    $introModalDescription2.classList.add("is-overflowing");
  } else {
    $introModalDescription2.classList.remove("is-overflowing");
  }
};

const showModal2 = (index) => {
  currentIndex = Number(index);
  const data = moduleData[currentIndex];

  $introModalTitle.innerText = data.subtitle || data.title;
  $introModalDescription.src = `../../assets/data/${data.image}`;
  $introModalDescription2.src = `../../assets/data/${data.image}`;
  
  $introModalIcon.className = `fas fa-${data.icon} fa-8x`;
  $introModal.classList.add("is-active");

  if (isOverflowing($introModalDescription)) {
    $introModalDescription.classList.add("is-overflowing");
  } else {
    $introModalDescription.classList.remove("is-overflowing");
  }

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
