const [, , regex, newSubstr, inFile] = process.argv

let data = ''
const stdin = process.stdin

if (inFile) {
  withoutPipe()
}

stdin.on('readable', function () {
  const chunk = this.read()

  if (chunk !== null) {
    data += chunk
  } else if (data === '') {
    withoutPipe()
  }
})

stdin.on('end', function () {
  withPipe(data)
})

//

function withPipe (data) {
  replaceAndLog(data.trim())

  process.exit()
}

function withoutPipe () {
  const Fs = require('fs')

  replaceAndLog(Fs.readFileSync(inFile, 'utf8'))

  process.exit()
}

function replaceAndLog (contents) {
  process.stdout.write(contents.replace(new RegExp(regex, 'gm'), newSubstr))
}