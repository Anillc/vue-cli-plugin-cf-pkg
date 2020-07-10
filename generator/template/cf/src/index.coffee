{ Application, Router } = require '@cfworker/web'

router = new Router()

(require './routes.coffee')(router)

new Application()
  .use router.middleware
  .use ({res}) ->
    res.redirect '/index.html' #fall back
  .listen()