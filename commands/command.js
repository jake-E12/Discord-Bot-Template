module.exports = {
    name: 'Your command name here',
    description: 'command decription',
    async execute(client, message, args) {
        // command output
        return message.reply("Hello");
    }
}