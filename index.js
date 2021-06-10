const tmi = require('tmi.js');
const { passowrd, channel } = require('./config.json');

// Define configuration options
const opts = {
  identity: {
    username: 'playbird12',
    password: passowrd,
  },
  channels: [
    channel
  ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

let brig = 0;

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  // If the command is known, let's execute it
  if (commandName === '!dum') {
    const num = rollDice();
    client.say(target, 'zeasty the dumbest of them all');
    console.log(`* Executed ${commandName} command`);
  } 
  else if (commandName === '!brig_dif') {
    brig = brig + 1;
    client.say(target, `Zeastral has lost to brig ${brig} times!`)
  }
  else if (commandName === '!roll') {
    const num = rollDice();
    const games = ['Overwatch','Apex legends','Valorant','Path of exile','Minecraft','Dead by daylight'];

    client.say(target, `Zeastral should play ${games[num - 1]}`);
  }
  else {
    console.log(`* Unknown command ${commandName}`);
  }
}

// Function called when the "dice" command is issued
function rollDice () {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}