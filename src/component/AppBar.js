class AppBar extends HTMLElement {
  connectedCallback(){
    this.render()
  }

  render() {
    this.innerHTML = `
    <nav class="navbar navbar-dark bg-dark bg-gradient position-relative py-5">
      <div class="container flex-column justify-content-center">
        <a class="navbar-brand fw-bold fs-1 me-0" href="/">
          Ani<span class="bg-warning text-dark rounded px-1 ms-1">hub</span>
        </a>
        <form class="d-flex justify-content-center position-absolute w-100 py-1">
          <div class="d-flex shadow rounded">
            <input class="border-0 rounded-start px-3" type="text" placeholder="Search (e.g. naruto)" />
            <input class="bg-warning border border-3 border-white rounded-end px-3" type="submit" value="Cari" />
          </div>
        </form>
      </div>
    </nav>
    `
  }
}

customElements.define('app-bar', AppBar)