class Card extends HTMLElement {
  connectedCallback(){
    this.render()
  }
  set bind(data) {
    this.data = data
    this.render()
  }
  render() {
    this.innerHTML = `
      <style>
        .card {
          aspect-ratio: 2/3;
        }
        .card img {
          object-position: center;
        }
        .card h5 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .bg-overlay {
          background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7) 60%,rgba(0,0,0,0.9));
        }
      </style>
      
      <div class="card bg-secondary overflow-hidden position-relative border-0">
        <img src="${this.data.attributes.posterImage.small}" width="100%" alt="${this.data.attributes.titles.en_jp}" />
        <div class="bg-overlay position-absolute bottom-0 w-100 p-3">
          <h5 class="text-light overflow-hidden mb-0">${this.data.attributes.titles.en_jp}</h5>
        </div>
      </div>
    `
  }
}

customElements.define('card-item', Card)