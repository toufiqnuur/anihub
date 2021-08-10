class ModalDetail extends HTMLElement {
  set bind(data) {
    this.data = data.attributes
    this.render()
  }
  
  render() {
    this.innerHTML = `
      <div class="modal fade" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body p-4">
              <h3 class="fw-bold mb-3">${this.data.titles.en_jp}</h3>
              <p>
                <span class="badge bg-warning text-dark">${this.data.subtype}</span>
                <span class="badge bg-warning text-dark">${this.data.status}</span>
                <span class="badge bg-warning text-dark">${this.data.averageRating}</span>
                <span class="badge bg-warning text-dark">${this.data.ageRatingGuide}</span>
              </p>
              <p class="text-muted mb-0">
                ${this.data.synopsis.length > 500 ? this.data.synopsis.slice(0,500) + '...' : this.data.synopsis}
              </p>
            </div>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('modal-detail', ModalDetail)