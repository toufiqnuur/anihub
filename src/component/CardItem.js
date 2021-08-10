class CardItem extends HTMLElement {
  connectedCallback(){
    this.id = this.getAttribute('id')
    this.render()
  }
  
  set bind(data) {
    this.data = data.attributes
    this.render()
  }
  
  render() {
    this.innerHTML = `
      <div class="card bg-secondary overflow-hidden position-relative border-0">
        <img id="${this.id}" src="${this.data.posterImage.small}" width="100%" alt="${this.data.titles.en_jp}" />
        <div class="bg-overlay position-absolute bottom-0 w-100 p-3">
          <h5 class="text-light overflow-hidden mb-0">${this.data.titles.en_jp}</h5>
        </div>
      </div>
    `
  }
}

customElements.define('card-item', CardItem)