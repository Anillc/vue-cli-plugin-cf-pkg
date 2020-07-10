files = require './files.json'

trans = (nFiles) ->
  nFiles.forEach (each) ->
    if each.type == 'file'
      each.buffer = Buffer.from each.content, 'base64'
    else
      trans each.children
  nFiles

module.exports = trans files