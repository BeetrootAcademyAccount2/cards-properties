class Card {
  constructor(name, type, properties = {}) {
    this.name = name;
    this.type = type;
    this.properties = properties;
  }

  createCardElement() {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h2");
    title.textContent = this.name;
    card.appendChild(title);

    const type = document.createElement("p");
    type.textContent = `Type: ${this.type}`;
    card.appendChild(type);

    const propertiesList = document.createElement("ul");
    for (const [key, value] of Object.entries(this.properties)) {
      const listItem = document.createElement("li");
      listItem.textContent = `${key}: ${value}`;
      propertiesList.appendChild(listItem);
    }
    card.appendChild(propertiesList);

    return card;
  }
}
