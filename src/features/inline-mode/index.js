const api = require('../../utils/api')
const generateAnswer = require('./generate-answer')


module.exports = (bot) => {
  bot.on('inline_query', async ({
    inlineQuery, update, telegram,
  }) => {
    const string = update.inline_query.query
    const { data } = await api.searchAnime(string)

    telegram.answerInlineQuery(inlineQuery.id, generateAnswer(data), {
      parse_mode: 'Markdown',
    })
  })
}
