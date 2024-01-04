// select all matrix lists
const matrixImportantUrgentList = document.querySelector(
  ".matrix__quadrant--important-urgent__list"
);
const matrixImportantNotUrgentList = document.querySelector(
  ".matrix__quadrant--important-not-urgent__list"
);
const matrixNotImportantUrgentList = document.querySelector(
  ".matrix__quadrant--not-important-urgent__list"
);
const matrixNotImportantNotUrgentList = document.querySelector(
  ".matrix__quadrant--not-important-not-urgent__list"
);

// select matrix lists buttons
const addToImportantUrgentList = document.querySelector(
  ".matrix__quadrant--important-urgent__add"
);
const addToImportantNotUrgentList = document.querySelector(
  ".matrix__quadrant--important-not-urgent__add"
);
const addToNotImportantUrgentList = document.querySelector(
  ".matrix__quadrant--not-important-urgent__add"
);
const addToNotImportantNotUrgentList = document.querySelector(
  ".matrix__quadrant--not-important-not-urgent__add"
);

let matrix = {
  importantUrgent: [],
  importantNotUrgent: [],
  notImportantUrgent: [],
  notImportantNotUrgent: [],
  importantUrgentList: matrixImportantUrgentList,
  importantNotUrgentList: matrixImportantNotUrgentList,
  notImportantUrgentList: matrixNotImportantUrgentList,
  notImportantNotUrgentList: matrixNotImportantNotUrgentList,
  add: function (item, list) {
    if (list === this.importantUrgentList) {
      this.importantUrgent.push(item);
    } else if (list === this.importantNotUrgentList) {
      this.importantNotUrgent.push(item);
    } else if (list === this.notImportantUrgentList) {
      this.notImportantUrgent.push(item);
    } else if (list === this.notImportantNotUrgentList) {
      this.notImportantNotUrgent.push(item);
    }
  },
};

let matrixLocalStorage = {
  importantUrgent: [],
  importantNotUrgent: [],
  notImportantUrgent: [],
  notImportantNotUrgent: [],
  addToLocalStorage: function (item, list) {
    if (list === matrixImportantUrgentList) {
      this.importantUrgent.push(item);
      localStorage.setItem(
        "importantUrgent",
        JSON.stringify(this.importantUrgent)
      );
    } else if (list === matrixImportantNotUrgentList) {
      this.importantNotUrgent.push(item);
      localStorage.setItem(
        "importantNotUrgent",
        JSON.stringify(this.importantNotUrgent)
      );
    } else if (list === matrixNotImportantUrgentList) {
      this.notImportantUrgent.push(item);
      localStorage.setItem(
        "notImportantUrgent",
        JSON.stringify(this.notImportantUrgent)
      );
    } else if (list === matrixNotImportantNotUrgentList) {
      this.notImportantNotUrgent.push(item);
      localStorage.setItem(
        "notImportantNotUrgent",
        JSON.stringify(this.notImportantNotUrgent)
      );
    }
  },
};

// add items to matrices
addToImportantUrgentList.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (addToImportantUrgentList.value === "") return;
    const item = addToImportantUrgentList.value;
    const li = document.createElement("li");
    const deleteItem = document.createElement("button");
    deleteItem.textContent = "X";
    deleteItem.classList.add("delete");
    li.textContent = item;
    li.appendChild(deleteItem);
    matrix.add(item, matrixImportantUrgentList);
    matrixImportantUrgentList.appendChild(li);
    addToImportantUrgentList.value = "";
    matrixLocalStorage.addToLocalStorage(item, matrixImportantUrgentList);
  }
});

addToImportantNotUrgentList.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (addToImportantNotUrgentList.value === "") return;
    const item = addToImportantNotUrgentList.value;
    const li = document.createElement("li");
    const deleteItem = document.createElement("button");
    deleteItem.textContent = "X";
    deleteItem.classList.add("delete");
    li.textContent = item;
    li.appendChild(deleteItem);
    matrix.add(item, matrixImportantNotUrgentList);
    matrixImportantNotUrgentList.appendChild(li);
    addToImportantNotUrgentList.value = "";
    matrixLocalStorage.addToLocalStorage(item, matrixImportantNotUrgentList);
  }
});

addToNotImportantUrgentList.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (addToNotImportantUrgentList.value === "") return;
    const item = addToNotImportantUrgentList.value;
    const li = document.createElement("li");
    const deleteItem = document.createElement("button");
    deleteItem.textContent = "X";
    deleteItem.classList.add("delete");
    li.textContent = item;
    li.appendChild(deleteItem);
    matrix.add(item, matrixNotImportantUrgentList);
    matrixNotImportantUrgentList.appendChild(li);
    addToNotImportantUrgentList.value = "";
    matrixLocalStorage.addToLocalStorage(item, matrixNotImportantUrgentList);
  }
});

addToNotImportantNotUrgentList.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (addToNotImportantNotUrgentList.value === "") return;
    const item = addToNotImportantNotUrgentList.value;
    const li = document.createElement("li");
    const deleteItem = document.createElement("button");
    deleteItem.textContent = "X";
    deleteItem.classList.add("delete");
    li.textContent = item;
    li.appendChild(deleteItem);
    matrix.add(item, matrixNotImportantNotUrgentList);
    matrixNotImportantNotUrgentList.appendChild(li);
    addToNotImportantNotUrgentList.value = "";
    matrixLocalStorage.addToLocalStorage(item, matrixNotImportantNotUrgentList);
  }
});

const deleteItem = document.querySelectorAll(".delete");
