
const cute = require('cute-dump')
const chalk = require('chalk')
const TOML = require('fast-toml')
const YAML = require('js-yaml')
const INI = require('ini')
const path = require('path')
const fs = require('fs')

const file = name => path.join(__dirname, name)

const readFile = name => fs.readFileSync(file(name))
const writeFile = (name, content) => fs.writeFileSync(file(name, content))
const unlink = name => fs.unlinkSync(file(name))

module.exports = {
	fs,
	chalk,
	path,
	cute,
	dump: cute.dump,
	TOML,
	YAML,
	INI,
	readFile,
	writeFile,
}
