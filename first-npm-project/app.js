const chalk = require('chalk')
const faker = require('faker')

const fakeName = faker.name.findName()
const fakeEmail = faker.internet.email()
const fakeDomain = faker.internet.domainName()

const greeting = `¡Hola! Me llamo ${fakeName}, mi email es ${fakeEmail} y mi web ${fakeDomain}`
console.log(chalk.red(greeting))