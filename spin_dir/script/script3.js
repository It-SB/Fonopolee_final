const $map = document.querySelector(".map1");
const $nodes = document.querySelectorAll(".node1");
const $nodes2 = document.querySelectorAll(".node3");
const $introModal = document.getElementById("introModal1");
const $introModalBackground = document.getElementById("introModalBackground1");
const $introModalClose = document.getElementById("introModalClose1");
const $introModalTitle = document.getElementById("introModalTitle1");
const $introModalDescription = document.getElementById("introModalDescription1");
const $introModalDescription2 = document.getElementById("introModalDescription3");
const $introModalIcon = document.getElementById("introModalIcon1");
const $introModalPrev = document.getElementById("introModalPrev1");
const $introModalNext = document.getElementById("introModalNext1");

let moduleData = [];
let currentIndex = 0;
let maxIndex =  11;

// Close event binding
[$introModalBackground, $introModalClose].forEach((elem) => {
  elem.addEventListener("click", () => {
    $introModal.classList.remove("is-active");
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

  // Hover
  ["mouseenter", "mouseleave"].forEach((mouseEvent) => {
    $node.addEventListener(mouseEvent, () => {
      // Toggle pause
      [$map, $node, $node.parentNode].forEach(($element) => {
        $element.classList.toggle("pause");
      });
    });
  });

  // Click
  $node.addEventListener("click", () => {
    showModal($node.dataset.index);
  });
});

$nodes2.forEach(($node) => {
    // Store module data in array
    moduleData[$node.dataset.index] = JSON.parse($node.dataset.info);
  
    // Hover
    ["mouseenter", "mouseleave"].forEach((mouseEvent) => {
      $node.addEventListener(mouseEvent, () => {
        // Toggle pause
        [$map, $node, $node.parentNode].forEach(($element) => {
          $element.classList.toggle("pause");
        });
      });
    });
  
    // Click
    $node.addEventListener("click", () => {
      showModal($node.dataset.index);
    });
  });

const showModal = (index) => {
  currentIndex = Number(index);
  const data = moduleData[currentIndex];

  $introModalTitle.innerText = data.subtitle || data.title;
  // $introModalDescription.className = `${data.image}`;
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
