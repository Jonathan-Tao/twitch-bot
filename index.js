const tmi = require('tmi.js');
const { passowrd, channel } = require('./config.json');

  if (commandName === '!dum') {
    const num = rollDice();
    client.say(target, 'zeasty the dumbest of them all');
    console.log(`* Executed ${commandName} command`);
  else if (commandName === '!brig_dif') {
    brig = brig + 1;
    client.say(target, `Zeastral has lost to brig ${brig} times!`)
  }
