const mime = require('mime-types');
const shell = require('shelljs');
const fs = require('fs');

function getFiles() {
    let res = []
    shell.ls().forEach(each => {
        let file = fs.statSync(each);
        if (file.isFile()) {
            let fileMime = mime.lookup(each) || 'text/plain'
            let content = fs.readFileSync(each).toString('base64')
            res.push({
                type: 'file',
                name: each,
                mime: fileMime,
                content
            });
        } else {
            shell.cd(each);
            res.push({
                type: 'folder',
                name: each,
                children: getFiles()
            });
            shell.cd('..');
        }
    })
    return res;
}

module.exports = (api, options) => {
    const { build } = api.service.commands;
    const fn = build.fn;
    build.fn = async (...args) => {
        await fn(...args);
        console.log('building for cf worker');
        shell.cd('dist');
        let files = getFiles();
        shell.cd('../cf/src')
        fs.writeFileSync('files.json',JSON.stringify(files))
    }
}