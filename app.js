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

// add items to matrix
addToImportantUrgentList.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const item = addToImportantUrgentList.value;
    const li = document.createElement("li");
    li.textContent = item;
    matrix.add(item, matrixImportantUrgentList);
    console.log(addToImportantUrgentList.value);
    matrixImportantUrgentList.appendChild(li);
  }
});
