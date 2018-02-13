const debug = require('debug')('anime-bot:install-features')
const Stage = require('telegraf/stage')
const features = require('../features')
const { sceneAbort } = require('./text')


module.exports = (bot) => {
  const stage = new Stage()
  const leave = Stage.leave()

  bot.use(stage.middleware())
  bot.command('cancel', (ctx) => {
    leave(ctx)
    ctx.reply(sceneAbort())
  })

  features.forEach((f) => {
    debug(f.name)
    f(bot, {
      stage,
      leave,
    })
  })
}
