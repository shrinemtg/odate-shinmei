const fs = require('fs')

module.exports = {
  '*.{ts,tsx}': (files) => {
    // .nextディレクトリのファイルを除外
    const filteredFiles = files.filter((f) => !f.includes('.next/'))

    // srcフォルダがある場合はその親ディレクトリを取得
    const cwd = process.cwd()
    const pattern = new RegExp(cwd + '/(.*)/src/.*')
    const srcParentDirs = new Set()
    filteredFiles.forEach((f) => {
      const match = f.match(pattern)
      if (match) srcParentDirs.add(cwd + '/' + match[1])
    })

    // srcフォルダと同一のディレクトリ配下にtsconfig.jsonが存在する場合は、tscによるチェック対象とする
    const tscCheckDirs = []
    srcParentDirs.forEach((d) => {
      if (fs.existsSync(d + '/tsconfig.json')) {
        tscCheckDirs.push(d)
      }
    })

    return [
      `yarn fix:format ${filteredFiles.join(' ')}`,
      `yarn fix:lint ${filteredFiles.join(' ')}`,
      ...tscCheckDirs.map((d) => `yarn tsc -p ${d} --noEmit`),
    ]
  },
}
