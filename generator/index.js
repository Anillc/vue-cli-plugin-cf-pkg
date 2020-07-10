const shell = require('shelljs');

module.exports = (api) => {
    api.render('./template');
}

module.exports.hooks = (api, options) => {
    api.afterInvoke(()=>{
        shell.cd('cf');
        if (options.useYarn) {
            shell.exec('yarn');
        } else {
            shell.exec('npm install');
        }
    });
}