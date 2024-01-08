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
    console.log(JSON.stringify(this.importantUrgentItems));
  },
};

addToImportantUrgentList.addEventListener("click", () => {
  if (KeyboardEvent.key === "Enter") {
    const itemName = addToImportantUrgentList.value;
    matrix.addItem(itemName, "importantUrgent");
    matrix.addItemsToLocalstorage();
  }
});

addToImportantNotUrgentList.addEventListener("click", () => {
  const itemName = prompt("Enter item name");
  matrix.addItem(itemName, "importantNotUrgent");
  matrix.addItemsToLocalstorage();
});

addToNotImportantUrgentList.addEventListener("click", () => {
  const itemName = prompt("Enter item name");
  matrix.addItem(itemName, "notImportantUrgent");
  matrix.addItemsToLocalstorage();
});

addToNotImportantNotUrgentList.addEventListener("click", () => {
  const itemName = prompt("Enter item name");
  matrix.addItem(itemName, "notImportantNotUrgent");
  matrix.addItemsToLocalstorage();
});

document.addEventListener("click", (event) => {
  // Check if the clicked element is a delete button
  if (event.target.matches(".deleteBtn")) {
    const itemName = event.target.previousElementSibling.textContent;
    const item = matrix.findItemByName(itemName);
    event.target.parentElement.remove();
    matrix.deleteItem(item);
  }
});
