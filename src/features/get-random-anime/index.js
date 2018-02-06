const debug = require('debug')('anime-bot:get-random-anime')
const { anime: { caption } } = require('../../utils/text')
const { baseURL } = require('../../config')
const mangaOrAnime = require('./manga-or-anime')


module.exports = (bot) => {
  bot.command('random', async ({
    replyWithPhoto, replyWithMarkdown, replyWithChatAction,
  }) => {
    debug('random title')
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
