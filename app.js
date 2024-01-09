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

// create a class for each item in the matrix
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
        <li class="matrix__quadrant--important-urgent__item">
        <span>${name}</span>
        <button class="deleteBtn">X</button>
        </li>`;
        break;
      case "importantNotUrgent":
        this.importantNotUrgentItems.push(new Item(name, quadrant));
        this.importantNotUrgentHTMLList.innerHTML += `
        <li class="matrix__quadrant--important-not-urgent__item">
        <span>${name}</span>
        <button class="deleteBtn">X</button>
        </li>`;
        break;
      case "notImportantUrgent":
        this.notImportantUrgentItems.push(new Item(name, quadrant));
        this.notImportantUrgentHTMLList.innerHTML += `
        <li class="matrix__quadrant--not-important-urgent__item">
        <span>${name}</span>
        <button class="deleteBtn">X</button>
        </li>`;
        break;
      case "notImportantNotUrgent":
        this.notImportantNotUrgentItems.push(new Item(name, quadrant));
        this.notImportantNotUrgentHTMLList.innerHTML += `
        <li class="matrix__quadrant--not-important-not-urgent__item">
        <span>${name}</span>
        <button class="deleteBtn">X</button>
        </li>`;
        break;
      default:
        console.log("Invalid quadrant name");
    }
  },

  findItemByName: function (name) {
    return this.importantUrgentItems
      .concat(
        this.importantNotUrgentItems,
        this.notImportantUrgentItems,
        this.notImportantNotUrgentItems
      )
      .find((item) => item.name === name);
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

  addItemsToLocalstorage: function () {
    localStorage.setItem(
      "importantUrgentItems",
      JSON.stringify(this.importantUrgentItems)
    );
    localStorage.setItem(
      "importantNotUrgentItems",
      JSON.stringify(this.importantNotUrgentItems)
    );
    localStorage.setItem(
      "notImportantUrgentItems",
      JSON.stringify(this.notImportantUrgentItems)
    );
    localStorage.setItem(
      "notImportantNotUrgentItems",
      JSON.stringify(this.notImportantNotUrgentItems)
    );
  },
};

addToImportantUrgentList.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    console.log(addToImportantUrgentList.value);
    const itemName = addToImportantUrgentList.value;
    matrix.addItem(itemName, "importantUrgent");
    matrix.addItemsToLocalstorage();
    addToImportantUrgentList.value = "";
  }
});

addToImportantNotUrgentList.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    console.log(addToImportantNotUrgentList.value);
    const itemName = addToImportantNotUrgentList.value;
    matrix.addItem(itemName, "importantNotUrgent");
    matrix.addItemsToLocalstorage();
    addToImportantNotUrgentList.value = "";
  }
});

addToNotImportantUrgentList.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    console.log(addToNotImportantUrgentList.value);
    const itemName = addToNotImportantUrgentList.value;
    matrix.addItem(itemName, "notImportantUrgent");
    matrix.addItemsToLocalstorage();
    addToNotImportantUrgentList.value = "";
  }
});

addToNotImportantNotUrgentList.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    console.log(addToNotImportantNotUrgentList.value);
    const itemName = addToNotImportantNotUrgentList.value;
    matrix.addItem(itemName, "notImportantNotUrgent");
    matrix.addItemsToLocalstorage();
    addToNotImportantNotUrgentList.value = "";
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches(".deleteBtn")) {
    const itemName = event.target.previousElementSibling.textContent;
    const item = matrix.findItemByName(itemName);
    event.target.parentElement.remove();
    matrix.deleteItem(item);
  }
});
