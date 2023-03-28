const path = require('path');
const { spawn } = require("child_process");

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

    var localScript = path.join(__dirname, '/install.ps1');

    spawn("powershell.exe",[localScript, job.workpath]);

}

