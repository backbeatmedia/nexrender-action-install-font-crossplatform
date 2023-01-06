const installfont = require('installfont');

module.exports = async (
  job,
  settings,
  action,
  type
) => {

    if (type != 'prerender') {
        throw new Error(`Font installer can be only run in prerender mode, you provided: ${type}.`)
    }
    settings.logger.log(`[${job.uid}] [action-install-font-crossplatform] Installing fonts from ${job.workpath}`)

    var options = {
      installForWindowsUser: true
    }

    await installfont(job.workpath, function(err) {
            if (err) throw err
        }, options)
}

