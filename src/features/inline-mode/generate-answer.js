const { anime: { captionInline } } = require('../../utils/text')
const { baseURL } = require('../../config')

module.exports = (list) => list.map((item) => (
  item = {
    id: item.id,
    type: 'photo',
    title: item.russian || item.name,
    thumb_url: `${baseURL}/${item.image.x96}`,
    photo_url: `${baseURL}/${item.image.original}`,
    caption: captionInline(item),
  }
))
