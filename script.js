document.addEventListener("DOMContentLoaded", () => {
  types.forEach((type) => {
    const title = document.createElement("h2");
    title.textContent = type.toUpperCase() + "S";
    const container = document.getElementById("lists-container");

    container.append(title);

    const groupParent = document.createElement("div");
    groupParent.id = type;
    groupParent.classList.add("d-flex");

    container.append(groupParent);

    const cardList = new CardList(type);

    products.forEach((product) => {
      const card = new Card(product.name, product.type, product.properties);
      cardList.addCard(card);
    });
    cardList.render();
  });
});
