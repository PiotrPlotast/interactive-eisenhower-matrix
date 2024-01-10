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
        const newImportantUrgent = document.createElement("li");
        newImportantUrgent.classList.add("matrix__list__item");
        newImportantUrgent.innerHTML = `
        <p class="matrix__list__item__input">${name}</p>
        <button class="matrix__list__item__delete">X</button>
        `;
        this.importantUrgentHTMLList.prepend(newImportantUrgent);
        break;
      case "importantNotUrgent":
        this.importantNotUrgentItems.push(new Item(name, quadrant));
        const newImportantNotUrgent = document.createElement("li");
        newImportantNotUrgent.classList.add("matrix__list__item");
        newImportantNotUrgent.innerHTML = `
        <p class="matrix__list__item__input">${name}</p>
        <button class="matrix__list__item__delete">X</button>
        `;
        this.importantNotUrgentHTMLList.prepend(newImportantNotUrgent);
        break;
      case "notImportantUrgent":
        this.notImportantUrgentItems.push(new Item(name, quadrant));
        const newnotImportantUrgent = document.createElement("li");
        newnotImportantUrgent.classList.add("matrix__list__item");
        newnotImportantUrgent.innerHTML = `
        <p class="matrix__list__item__input">${name}</p>
        <button class="matrix__list__item__delete">X</button>
        `;
        this.notImportantUrgentHTMLList.prepend(newnotImportantUrgent);
        break;
      case "notImportantNotUrgent":
        this.notImportantNotUrgentItems.push(new Item(name, quadrant));
        const newNotImportantNotUrgent = document.createElement("li");
        newNotImportantNotUrgent.classList.add("matrix__list__item");
        newNotImportantNotUrgent.innerHTML = `
        <p class="matrix__list__item__input">${name}</p>
        <button class="matrix__list__item__delete">X</button>
        `;
        this.notImportantNotUrgentHTMLList.prepend(newNotImportantNotUrgent);
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

  loadItemsFromLocalStorage: function () {
    const importantUrgentItems = JSON.parse(
      localStorage.getItem("importantUrgentItems")
    );
    const importantNotUrgentItems = JSON.parse(
      localStorage.getItem("importantNotUrgentItems")
    );
    const notImportantUrgentItems = JSON.parse(
      localStorage.getItem("notImportantUrgentItems")
    );
    const notImportantNotUrgentItems = JSON.parse(
      localStorage.getItem("notImportantNotUrgentItems")
    );

    if (importantUrgentItems) {
      importantUrgentItems.forEach((item) => {
        this.addItem(item.name, item.quadrant);
      });
    }
    if (importantNotUrgentItems) {
      importantNotUrgentItems.forEach((item) => {
        this.addItem(item.name, item.quadrant);
      });
    }
    if (notImportantUrgentItems) {
      notImportantUrgentItems.forEach((item) => {
        this.addItem(item.name, item.quadrant);
      });
    }
    if (notImportantNotUrgentItems) {
      notImportantNotUrgentItems.forEach((item) => {
        this.addItem(item.name, item.quadrant);
      });
    }
  },
};

addToImportantUrgentList.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (addToImportantUrgentList.value === "") return;
    console.log(addToImportantUrgentList.value);
    const itemName = addToImportantUrgentList.value;
    matrix.addItem(itemName, "importantUrgent");
    matrix.addItemsToLocalstorage();
    addToImportantUrgentList.value = "";
  }
});

addToImportantNotUrgentList.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (addToImportantNotUrgentList.value === "") return;
    console.log(addToImportantNotUrgentList.value);
    const itemName = addToImportantNotUrgentList.value;
    matrix.addItem(itemName, "importantNotUrgent");
    matrix.addItemsToLocalstorage();
    addToImportantNotUrgentList.value = "";
  }
});

addToNotImportantUrgentList.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (addToNotImportantUrgentList.value === "") return;
    console.log(addToNotImportantUrgentList.value);
    const itemName = addToNotImportantUrgentList.value;
    matrix.addItem(itemName, "notImportantUrgent");
    matrix.addItemsToLocalstorage();
    addToNotImportantUrgentList.value = "";
  }
});

addToNotImportantNotUrgentList.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (addToNotImportantNotUrgentList.value === "") return;
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

window.onload = function () {
  matrix.loadItemsFromLocalStorage();
};
