const installfont = require('installfont')
const path= require('path')

module.exports = async (
  job,
  settings,
  action,
  type
) => {

    await installfont(job.workpath, function(err) {
        return reject(err)
    });

}

