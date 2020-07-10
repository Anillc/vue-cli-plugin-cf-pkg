files = require './files.coffee'

addRoutes = (router, path, nFiles) ->
  nFiles.forEach (each) ->
    if each.type == 'file'
      router.get "#{path}#{each.name}", ({ res }) ->
        res.type = each.mime
        res.body = each.buffer
    else
      addRoutes router, "#{path}#{each.name}/", each.children

module.exports = (router) ->
  addRoutes router, '/', files