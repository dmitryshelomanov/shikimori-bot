const { anime: { captionInline } } = require('../../utils/text')


module.exports = (list) => list.map((item) => (
  item = {
    id: item.id,
    type: 'photo',
    title: item.russian || item.name,
    thumb_url: `https://shikimori.org/${item.image.x96}`,
    photo_url: `https://shikimori.org/${item.image.original}`,
    caption: captionInline(item),
  }
))
