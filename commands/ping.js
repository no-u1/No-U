module.exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const msg = await message.channel.send("Ping?");
  msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

module.exports.help = {
  name: "ping",
  category: "Miscelaneo",
  description: "It like... Pings. Then Pongs. And it's not Ping Pong.",
  usage:"ping"
  
};
