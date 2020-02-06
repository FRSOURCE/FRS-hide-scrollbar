const FastGlob = require('fast-glob')
const { exec } = require('child_process')

const [, , ...args] = process.argv
let cmd = args.splice(0, 1)

const files = FastGlob.sync(args)

cmd = `${cmd} ${files.join(' ')}`

exec(
  cmd,
  (error, stdout) => console.log(stdout)
)
