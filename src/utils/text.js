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
    search: (anime) => (`
*Название* - ${anime.name}, (${anime.russian})
*Статус* - ${anime.status || '??'}
*Ссылка* - [click to go](${baseURL}${anime.url})
    `),
  },
  simpleSearch: {
    greeting: () => (`*Привет. Укажи название аниме которое хочешь найти*`),
    leave(error) {
      return !error
        ? `*Я кажется что то нашел. Вот оно*`
        : `*Sorry. Something went wrong*`
    },
  },
  sceneAbort: () => (`
*Диалог отменен ^(*
  `),
}
