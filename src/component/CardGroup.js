import { Modal } from 'bootstrap'
import './CardItem.js'
import './ModalDetail.js'

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
    `
    this.renderCards(this.data)
    this.setCardsEventClick()
  }
  
  renderCards(data) {
    const cardGroup = this.querySelector('.row')
    data.forEach((data, index) => {
      const cardItem = document.createElement('card-item')
      cardItem.setAttribute('class','col-6 col-md-2')
      cardItem.setAttribute('id', index)
      cardItem.bind = data
      cardGroup.appendChild(cardItem)
    })
  }
  
  setCardsEventClick() {
    const cardItems = this.querySelectorAll('card-item')
    let modalDetails = null
    cardItems.forEach(card => {
      card.onclick = () => {
        if(modalDetails) modalDetails.remove()
        const newModalDetails = document.createElement('modal-detail')
        newModalDetails.bind = this.data[+card.id]
        this.appendChild(newModalDetails)
        modalDetails = this.querySelector('.modal')
        new Modal(modalDetails).show()
      }
    })
  }
}

customElements.define('card-group', CardGroup)