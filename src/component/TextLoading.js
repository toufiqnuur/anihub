class TextLoading extends HTMLElement {
  constructor() {
    super()
    this.root = this.attachShadow({mode:'open'})
  }
  
  connectedCallback(){
    this.render()
  }
  
  render() {
    this.root.innerHTML = `
      <style>
        p {
          margin: 3rem 0;
          text-align: center;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            color: rgb(255,193,7);
          }
        }
      </style>
      <p>Loading...</p>
    `
  }
}

customElements.define('text-loading', TextLoading)