// select all matrix lists
import {
  matrixImportantUrgentList,
  matrixImportantNotUrgentList,
  matrixNotImportantUrgentList,
  matrixNotImportantNotUrgentList,
  addToImportantUrgentList,
  addToImportantNotUrgentList,
  addToNotImportantUrgentList,
  addToNotImportantNotUrgentList,
} from "./matrixUtils.js";
// end of selections

const matrixImportantUrgent = [];
const matrixImportantNotUrgent = [];
const matrixNotImportantUrgent = [];
const matrixNotImportantNotUrgent = [];

function addItemToList(inputValue, list) {
  if (inputValue === "") {
    throw new Error("Please enter a value");
  } else {
    const matrixItem = document.createElement("li");
    matrixItem.classList.add("matrix__list__item");
    matrixItem.innerHTML = `
    <p class="matrix__list__item__input">${inputValue}</p>
    <button class="matrix__list__item__delete">X</button>
    `;
    list.prepend(matrixItem);

    switch (list) {
      case matrixImportantUrgentList:
        matrixImportantUrgent.push(inputValue);
        break;
      case matrixImportantNotUrgentList:
        matrixImportantNotUrgent.push(inputValue);
        break;
      case matrixNotImportantUrgentList:
        matrixNotImportantUrgent.push(inputValue);
        break;
      case matrixNotImportantNotUrgentList:
        matrixNotImportantNotUrgent.push(inputValue);
        break;
    }
  }
}

function addInputValueToLocalStorage() {
  localStorage.setItem(
    "matrixImportantUrgentItems",
    JSON.stringify(matrixImportantUrgent)
  );

  localStorage.setItem(
    "matrixImportantNotUrgentItems",
    JSON.stringify(matrixImportantNotUrgent)
  );

  localStorage.setItem(
    "matrixNotImportantUrgentItems",
    JSON.stringify(matrixNotImportantUrgent)
  );

  localStorage.setItem(
    "matrixNotImportantNotUrgentItems",
    JSON.stringify(matrixNotImportantNotUrgent)
  );
}

function deleteItemFromLocalStorage(list, item) {
  console.log(list);
  console.log(item);
  // switch (list) {
  //   case "matrix__quadrant--important-urgent__list":
  //     console.log(list);
  //     let matrixImportantUrgentItems = JSON.parse(
  //       localStorage.getItem("matrixImportantUrgentItems")
  //     );
  //     const index1 = matrixImportantUrgentItems.indexOf(item);
  //     if (index1 !== -1) {
  //       matrixImportantUrgentItems.splice(index1, 1);

  //       const arrayString = JSON.stringify(matrixImportantUrgentItems);

  //       localStorage.setItem("matrixImportantUrgentList", arrayString);
  //     }
  //     break;

  //   case "matrix__quadrant--important-not-urgent__list":
  //     let matrixImportantNotUrgentItems = JSON.parse(
  //       localStorage.getItem("matrixImportantNotUrgentItems")
  //     );
  //     const index2 = matrixImportantNotUrgentItems.indexOf(item);
  //     if (index2 !== -1) {
  //       matrixImportantNotUrgentItems.splice(index2, 1);

  //       const arrayString = JSON.stringify(matrixImportantNotUrgentItems);

  //       localStorage.setItem("matrixImportantNotUrgentList", arrayString);
  //     }
  //     break;

  //   case "matrix__quadrant--not-important-urgent__list":
  //     let matrixNotImportantUrgentItems = JSON.parse(
  //       localStorage.getItem("matrixNotImportantUrgentItems")
  //     );
  //     const index3 = matrixNotImportantUrgentItems.indexOf(item);
  //     if (index3 !== -1) {
  //       matrixNotImportantUrgentItems.splice(index3, 1);

  //       const arrayString = JSON.stringify(matrixNotImportantUrgentItems);

  //       localStorage.setItem("matrixNotImportantUrgentList", arrayString);
  //     }
  //     break;

  //   case "matrix__quadrant--not-important-not-urgent__list":
  //     let matrixNotImportantNotUrgentItems = JSON.parse(
  //       localStorage.getItem("matrixNotImportantNotUrgentItems")
  //     );

  //     const index4 = matrixNotImportantNotUrgentItems.indexOf(item);
  //     if (index4 !== -1) {
  //       matrixNotImportantNotUrgentItems.splice(index4, 1);

  //       const arrayString = JSON.stringify(matrixNotImportantNotUrgentItems);

  //       localStorage.setItem("matrixNotImportantNotUrgentList", arrayString);
  //     }
  //     break;
  // }
}

function deleteItem() {
  const deleteItems = document.querySelectorAll(".matrix__list__item__delete");
  deleteItems.forEach((deleteItem) => {
    const list = deleteItem.parentElement.parentElement;
    const item = deleteItem.parentElement;

    deleteItem.addEventListener("click", (event) => {
      deleteItemFromLocalStorage(list, item);
      event.target.parentElement.remove();
    });
  });
}

// add items to matrix lists on enter key press
addToImportantUrgentList.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addItemToList(addToImportantUrgentList.value, matrixImportantUrgentList);
    addInputValueToLocalStorage();
    addToImportantUrgentList.value = "";
    deleteItem();
  }
});

addToImportantNotUrgentList.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addItemToList(
      addToImportantNotUrgentList.value,
      matrixImportantNotUrgentList
    );
    addInputValueToLocalStorage();
    addToImportantNotUrgentList.value = "";
    deleteItem();
  }
});

addToNotImportantUrgentList.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addItemToList(
      addToNotImportantUrgentList.value,
      matrixNotImportantUrgentList
    );
    addInputValueToLocalStorage();
    addToNotImportantUrgentList.value = "";
    deleteItem();
  }
});

addToNotImportantNotUrgentList.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addItemToList(
      addToNotImportantNotUrgentList.value,
      matrixNotImportantNotUrgentList
    );
    addInputValueToLocalStorage();
    addToNotImportantNotUrgentList.value = "";
    deleteItem();
  }
});
// end of adding items to matrix lists on enter key press

// add items to matrix lists from local storage on page load
function addItemsFromLocalStorage() {
  const matrixImportantUrgentItems = JSON.parse(
    localStorage.getItem("matrixImportantUrgentItems")
  );

  const matrixImportantNotUrgentItems = JSON.parse(
    localStorage.getItem("matrixImportantNotUrgentItems")
  );

  const matrixNotImportantUrgentItems = JSON.parse(
    localStorage.getItem("matrixNotImportantUrgentItems")
  );

  const matrixNotImportantNotUrgentItems = JSON.parse(
    localStorage.getItem("matrixNotImportantNotUrgentItems")
  );

  if (matrixImportantUrgentItems) {
    matrixImportantUrgentItems.forEach((item) => {
      addItemToList(item, matrixImportantUrgentList);
    });
    deleteItem();
  }

  if (matrixImportantNotUrgentItems) {
    matrixImportantNotUrgentItems.forEach((item) => {
      addItemToList(item, matrixImportantNotUrgentList);
    });
    deleteItem();
  }

  if (matrixNotImportantUrgentItems) {
    matrixNotImportantUrgentItems.forEach((item) => {
      addItemToList(item, matrixNotImportantUrgentList);
    });
    deleteItem();
  }

  if (matrixNotImportantNotUrgentItems) {
    matrixNotImportantNotUrgentItems.forEach((item) => {
      addItemToList(item, matrixNotImportantNotUrgentList);
    });
    deleteItem();
  }
}

window.onload = addItemsFromLocalStorage();
// end of adding items to matrix lists from local storage on page load
