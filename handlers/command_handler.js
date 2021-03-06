const fs = require('fs');

module.exports = (client, Discord) => {
    const command_files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

    for (const file of command_files) {
        const command = require(`../commands/${file}`);
        console.log(file);
        if (command.name) {
            client.command.set(command.name, command);
            console.log(command);
        } else {
            continue;
        }
    }
}
