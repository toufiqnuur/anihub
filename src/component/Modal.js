class Modal extends HTMLElement {
  connectedCallback() {
    this.render()
  }
  set bind(data) {
    this.data = data
    this.render()
  }
  render() {
    this.innerHTML = `
      <div class="modal fade" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body p-4">
              <h3 class="fw-bold mb-3">${this.data.attributes.titles.en_jp}</h3>
              <p>
                <span class="badge bg-warning text-dark">${this.data.attributes.subtype}</span>
                <span class="badge bg-warning text-dark">${this.data.attributes.status}</span>
                <span class="badge bg-warning text-dark">${this.data.attributes.averageRating}</span>
                <span class="badge bg-warning text-dark">${this.data.attributes.ageRatingGuide}</span>
              </p>
              <p class="text-muted mb-0">
                ${this.data.attributes.synopsis.slice(0,500)}...
              </p>
            </div>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('modal-details', Modal)