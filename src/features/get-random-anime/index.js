const { anime: { caption } } = require('../../utils/text')
const api = require('../../utils/api')
const { baseURL } = require('../../config')


module.exports = (bot) => {
  bot.command('animeRandom', async ({
    replyWithPhoto, replyWithMarkdown, replyWithChatAction,
  }) => {
    try {
      const { data } = await api.getAnimeById(Math.floor(Math.random() * 3000))

      replyWithChatAction('typing')
      await replyWithPhoto({ url: `${baseURL}${data.image.original}` })
      await replyWithMarkdown(caption(data), {
        disable_web_page_preview: true,
      })
    }
    catch (error) {
      replyWithMarkdown('*Sorry. Something went wrong*')
    }
  })
}
