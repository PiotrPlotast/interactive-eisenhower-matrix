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

class Item {
  constructor(name, quadrant) {
    this.name = name;
    this.quadrant = quadrant;
  }
}

let matrix = {
  importantUrgentItems: [],
  importantNotUrgentItems: [],
  notImportantUrgentItems: [],
  notImportantNotUrgentItems: [],
  importantUrgentHTMLList: matrixImportantUrgentList,
  importantNotUrgentHTMLList: matrixImportantNotUrgentList,
  notImportantUrgentHTMLList: matrixNotImportantUrgentList,
  notImportantNotUrgentHTMLList: matrixNotImportantNotUrgentList,

  addItem: function (name, quadrant) {
    switch (quadrant) {
      case "importantUrgent":
        this.importantUrgentItems.push(new Item(name, quadrant));
        this.importantUrgentHTMLList.innerHTML += `
        <li class="matrix__quadrant--important-urgent__item">${name}</li>
        <button class="deleteBtn">X</button>`;
        attachDeleteButtonListeners();
        break;
      case "importantNotUrgent":
        this.importantNotUrgentItems.push(new Item(name, quadrant));
        this.importantNotUrgentHTMLList.innerHTML += `
        <li class="matrix__quadrant--important-not-urgent__item">${name}</li>
        <button class="deleteBtn">X</button>`;
        attachDeleteButtonListeners();
        break;
      case "notImportantUrgent":
        this.notImportantUrgentItems.push(new Item(name, quadrant));
        this.notImportantUrgentHTMLList.innerHTML += `
        <li class="matrix__quadrant--not-important-urgent__item">${name}</li>
        <button class="deleteBtn">X</button>`;
        attachDeleteButtonListeners();
        break;
      case "notImportantNotUrgent":
        this.notImportantNotUrgentItems.push(new Item(name, quadrant));
        this.notImportantNotUrgentHTMLList.innerHTML += `
        <li class="matrix__quadrant--not-important-not-urgent__item">${name}</li>
        <button class="deleteBtn">X</button>`;
        attachDeleteButtonListeners();
        break;
      default:
        console.log("Invalid quadrant name");
    }
  },

  deleteItem: function (item) {
    switch (item.quadrant) {
      case "importantUrgent":
        this.importantUrgentItems.splice(
          this.importantUrgentItems.indexOf(item),
          1
        );
        break;
      case "importantNotUrgent":
        this.importantNotUrgentItems.splice(
          this.importantNotUrgentItems.indexOf(item),
          1
        );
        break;
      case "notImportantUrgent":
        this.notImportantUrgentItems.splice(
          this.notImportantUrgentItems.indexOf(item),
          1
        );
        break;
      case "notImportantNotUrgent":
        this.notImportantNotUrgentItems.splice(
          this.notImportantNotUrgentItems.indexOf(item),
          1
        );
        break;
      default:
        console.log("Invalid quadrant name");
        console.log(item.quadrant);
    }
  },
};

function attachDeleteButtonListeners() {
  const deleteBtns = document.querySelectorAll(".deleteBtn");
  deleteBtns.forEach((btn) => {
    btn.removeEventListener("click", matrix.deleteItem);
    btn.addEventListener("click", matrix.deleteItem);
  });
}

addToImportantUrgentList.addEventListener("click", () => {
  const itemName = prompt("Enter item name");
  matrix.addItem(itemName, "importantUrgent");
});

addToImportantNotUrgentList.addEventListener("click", () => {
  const itemName = prompt("Enter item name");
  matrix.addItem(itemName, "importantNotUrgent");
});

addToNotImportantUrgentList.addEventListener("click", () => {
  const itemName = prompt("Enter item name");
  matrix.addItem(itemName, "notImportantUrgent");
});

addToNotImportantNotUrgentList.addEventListener("click", () => {
  const itemName = prompt("Enter item name");
  matrix.addItem(itemName, "notImportantNotUrgent");
});
