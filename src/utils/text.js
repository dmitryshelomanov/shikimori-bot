const { baseURL } = require('../config')


module.exports = {
  anime: {
    caption: (anime, type) => (`
*${type}*
*Название* - ${anime.name}, (${anime.russian})
*Статус* - ${anime.status || '??'}
*Эпизоды* - ${anime.episodes || '??'}
*Дата выхода* - ${anime.aired_on || '??'}
*Тип* - ${anime.kind || '??'}
*Ссылка* - [click to go](${baseURL}${anime.url})
    `),
  },
}
