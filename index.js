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

    console.log(`Installing fonts from ${job.workpath}`);

    await installfont(job.workpath, function(err) {
            if (err) throw err
        })
}

