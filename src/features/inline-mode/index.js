const debug = require('debug')('anime-bot:inline-mode')
const api = require('../../utils/api')
const generateAnswer = require('./generate-answer')


const inlineMode = (bot) => {
  bot.on('inline_query', async ({
    inlineQuery, update, telegram,
  }) => {
    const string = update.inline_query.query
    const { data } = await api.searchAnime(string)

    debug(string)
    telegram.answerInlineQuery(inlineQuery.id, generateAnswer(data), {
      cache_time: 0,
    })
  })
}

module.exports = inlineMode
