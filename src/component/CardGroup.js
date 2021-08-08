import './Card'
import './Modal'
import { Modal } from 'bootstrap'

class CardGroup extends HTMLElement {
  connectedCallback(){
    this.title  = this.getAttribute('title')
    this.expand = this.getAttribute('expand')
    this.render()
  }
  set bind(data) {
    this.data = data
    this.render()
  }
  render() {
    this.innerHTML = `
      <h3 class="mb-3">${this.title}</h3>
      <div class="row ${this.expand === 'horizontal' ? 'gx-3 flex-nowrap overflow-auto' : 'g-3'} mb-4"></div>
      <modal-details></modal-details>
    `
    
    this.data.forEach((data, index) => {
      const cardItem = document.createElement('card-item')
      cardItem.setAttribute('class','col-6 col-md-2')
      cardItem.setAttribute('id', index)
      cardItem.bind = data
      this.querySelector('.row').appendChild(cardItem)
    })
    
    this.querySelectorAll('card-item').forEach(item => {
      item.onclick = (e) => {
        this.querySelector('modal-details').bind = this.data[+e.target.id]
        new Modal(this.querySelector('.modal')).show()
      }
    })
  }
}

customElements.define('card-group', CardGroup)