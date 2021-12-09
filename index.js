const chalk = require('chalk')

function Piss() {
    console.log(chalk.yellow("Piss"));
}

function HasPiss(text) {
    if (text.toLowerCase().includes("piss")) {
        return true;
    } else {
        return false;
    }
}

module.exports = { Piss, HasPiss }
