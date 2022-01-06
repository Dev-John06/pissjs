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

function ColourPiss(color) {
    // switch statement for each colour console log in a color.
    switch (color) {
        case "red":
            console.log(chalk.red("Piss"));
            break;
        case "green":
            console.log(chalk.green("Piss"));
            break;
        case "blue":
            console.log(chalk.blue("Piss"));
            break;
        case "yellow":
            console.log(chalk.yellow("Piss"));
            break;
        case "magenta":
            console.log(chalk.magenta("Piss"));
            break;
        case "cyan":
            console.log(chalk.cyan("Piss"));
            break;
        case "white":
            console.log(chalk.white("Piss"));
            break;
        case "gray":
            console.log(chalk.gray("Piss"));
            break;
        case "black":
            console.log(chalk.black("Piss"));
            break;
        default:
            console.error("Error: Invalid color");
            break;
    }
}

module.exports = { Piss, HasPiss }
