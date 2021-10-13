const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ ❕ ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ ❕ ] » ') + data);
			break;
		default:
			console.log(chalk.magenta(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ HDAN ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ HDAN ] » ') + data);
			break;
		default:
			console.log(chalk.green(`[ HDAN ] » `) + data);
			break;
	}
}
