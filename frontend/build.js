const series = require('async/series')
const { exec } = require('child_process')

series([() => exec('npm run build')])
