const api = require('../../utils/api')


module.exports = async function mangaOrAnime(random) {
  if (random === 0) {
    return [
      await api.getAnimeById(Math.floor(Math.random() * 3000)),
      'Аниме',
    ]
  }
  return [
    await api.getMangaById(Math.floor(Math.random() * 3000)),
    'Манга',
  ]
}
