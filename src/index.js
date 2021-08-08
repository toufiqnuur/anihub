import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import './component/AppBar'
import './component/Card'
import './component/CardGroup'
import './component/Loading'
import api from './service'

const form = E('form')
const query= E('input')[0]
const view = E('main')

api.trending.then(res => {
  const list = newCard('Trending', 'horizontal', res.data.data)
  view.appendChild(list)
})
api.airing.then(res => {
  const list = newCard('Top Airing', 'horizontal', res.data.data)
  view.appendChild(list)
})
api.upcoming.then(res => {
  const list = newCard('Top upcoming', 'horizontal', res.data.data)
  view.appendChild(list)
})
api.best.then(res => {
  const list = newCard('Highest Rated', 'horizontal', res.data.data)
  view.appendChild(list)
})
api.popular.then(res => {
  const list = newCard('Most Popular', 'horizontal', res.data.data)
  view.appendChild(list)
})
 
form.onsubmit = (e) => {
  e.preventDefault()
  query.blur()
  if(query.value) {
    view.innerHTML = ''
    const isLoading = document.createElement('is-loading')
    view.appendChild(isLoading)
  
    api.search(query.value).then(res => {
      const list = newCard(`Results for "${query.value}"`, 'vertikal', res.data.data)
      view.appendChild(list)
      E('is-loading').remove()
    })
  }
}

function E(e) {
  e = document.querySelectorAll(e)
  return e.length > 1 ? e : e[0]
}

function newCard(a, b, c) {
  const e = document.createElement('card-group')
  e.setAttribute('title', a)
  e.setAttribute('expand', b)
  e.bind = c
  return e
}