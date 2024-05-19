class CardList {
  constructor(type) {
    this.container = document.getElementById(type);
    this.type = type;
    this.cards = [];
  }

  addCard(card) {
    this.cards.push(card);
  }

  render() {
    this.container.innerHTML = "";
    this.cards
      .filter((card) => card.type === this.type)
      .forEach((card) => {
        this.container.appendChild(card.createCardElement());
      });
  }
}
