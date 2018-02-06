const { anime: { caption } } = require('../../utils/text')
const api = require('../../utils/api')
const { baseURL } = require('../../config')


async function mangaOrAnime(random) {
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

module.exports = (bot) => {
  bot.command('random', async ({
    replyWithPhoto, replyWithMarkdown, replyWithChatAction,
  }) => {
    try {
      const [{ data }, type] = await mangaOrAnime(Math.floor(Math.random() * 2))

      replyWithChatAction('typing')
      await replyWithPhoto({ url: `${baseURL}${data.image.original}` })
      await replyWithMarkdown(caption(data, type), {
        disable_web_page_preview: true,
      })
    }
    catch (error) {
      replyWithMarkdown('*Sorry. Something went wrong*')
    }
  })
}
