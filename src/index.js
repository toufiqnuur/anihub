import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import './component/AppBar.js'
import './component/CardGroup.js'
import './component/TextLoading.js'
import api from './service'
import axios from 'axios'

const $ = (e) => {
  e = document.querySelectorAll(e)
  return e.length > 1 ? e : e[0]
}

const newCardGroup = ({title, expand, data}) => {
  const cardGroup = document.createElement('card-group')
  cardGroup.setAttribute('title', title)
  cardGroup.setAttribute('expand', expand)
  cardGroup.bind = data
  return cardGroup
}

const searchForm = $('form')
const searchInput = $('input')[0]
const view = $('main')

searchForm.onsubmit = (event) => {
  event.preventDefault()
  searchInput.blur()
  if(searchInput.value) {
    view.innerHTML = ''
    const loading = document.createElement('text-loading')
    view.appendChild(loading)
    api.search(searchInput.value).then(res => {
      const cardGroup = newCardGroup({
        title: `Results for "${searchInput.value}"`, 
        expand: 'vertikal', 
        data: res.data.data
      })
      view.appendChild(cardGroup)
      $('text-loading').remove()
    })
  }
}

axios.all([
  api.trending,
  api.popular,
  api.upcoming,
  api.best,
  api.popular
]).then((res) => {
  const groupTitles = ["Trending", "Top Airing", "Top Upcoming", "Highest Rated", "Most Popular"]
  groupTitles.forEach((title, index) => {
    const cardGroup = newCardGroup({
      title, 
      expand: 'horizontal',
      data: res[index].data.data
    })
    view.appendChild(cardGroup)
  })
})