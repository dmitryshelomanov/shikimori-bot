const Scene = require('telegraf/scenes/base')
const debug = require('debug')('anime-bot:search')
const { simpleSearch: text, anime } = require('../../utils/text')
const api = require('../../utils/api')


const search = (bot, { stage, leave }) => {
  const simpleSearch = new Scene('simple-search')

  simpleSearch.enter(({ replyWithMarkdown }) => replyWithMarkdown(text.greeting()))
  simpleSearch.hears(/^[^/\\/]+$/gi, async ({
    replyWithChatAction, replyWithMarkdown, scene, message,
  }) => {
    debug('search anime', message.text)
    try {
      const { data } = await api.searchAnime(message.text, 5)

      replyWithChatAction('typing')
      leave({ scene })
      replyWithMarkdown(text.leave(false))
      data.map((i) => replyWithMarkdown(anime.search(i)))
    }
    catch (_) {
      leave({ scene })
      replyWithMarkdown(text.leave(true))
    }
  })
  stage.register(simpleSearch)

  bot.command('search', ({ scene }) => {
    scene.enter('simple-search')
  })
}

module.exports = search
