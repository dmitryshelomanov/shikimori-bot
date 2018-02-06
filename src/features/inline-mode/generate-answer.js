const { baseURL } = require('../../config')


module.exports = (list) => list.map((item) => (
  item = {
    id: item.id,
    type: 'article',
    title: `${item.russian || ''} (${item.name || ''})`,
    thumb_url: `${baseURL}/${item.image.x96}`,
    input_message_content: {
      message_text: `${baseURL}/${item.url}`,
      parse_mode: 'Markdown',
    },
  }
))
