const axios = require('axios')
const { baseURL } = require('../config')


class Api {
  constructor() {
    this.request = axios.create({
      baseURL: `${baseURL}/api`,
    })
  }

  async getAnimeById(id) {
    return await this.request.get(`/animes/${id}`)
  }

  async getMangaById(id) {
    return await this.request.get(`/mangas/${id}`)
  }

  async searchAnime(s, limit = 20) {
    return await this.request.get(`/animes?search=${s}&limit=${limit}`)
  }
}

module.exports = new Api()
