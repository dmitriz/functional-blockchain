// list files to export
const imports = 
[ './functional-utils'
, './cps-utils'
]
module.exports = Object.assign({}, ...imports.map(require))
