import axios from 'axios'

const _axios = axios.create({ baseURL: 'https://kitsu.io/api/edge/' })

const api = {
  search: function(q) {
    return _axios.get(`anime?filter[text]=${q}`)
  },
  trending: _axios.get('trending/anime'),
  airing: _axios.get('anime?filter[status]=current&sort=-userCount'),
  upcoming: _axios.get('anime?filter[status]=upcoming&sort=-userCount'),
  best: _axios.get('anime?sort=-averageRating'),
  popular: _axios.get('anime?sort=-userCount')
}
  
export default api