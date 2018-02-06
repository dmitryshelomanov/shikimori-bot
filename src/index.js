const debug = require('debug')('anime-bot:index')
const Telegraf = require('telegraf')
const dotenv = require('dotenv')
const instalFeature = require('./utils/install-features')


dotenv.load()
const bot = new Telegraf(process.env.BOT_TOKEN)

debug('bot started')

instalFeature(bot)

bot.startPolling()
