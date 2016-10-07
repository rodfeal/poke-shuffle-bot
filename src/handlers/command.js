import Ability from "../services/ability";

const ability = new Ability();

export default class Command {
  constructor() {}

  getGreeting(message, bot) {
    bot.sendMessage(message.from, 'Hi, there! It is nice to see you here, ${message.user.firstName} !');
  }

  getAbility(message, bot) {
    ability.getByName("Block Smash+");

    const text =
      ability.name + ":" + "%\n" +
      "Trigger Rate: " + "%\n" +
      "%\t3 Match " + "50%" + "%\n" +
      "%\t4 Match " + "70%" + "%\n" +
      "%\t5 Match " + "100%" + "%\n";

    bot.sendMessage(message.from, text);
  }

  getHelp(message, bot) {
    bot.sendMessage(message.from, 'Call the /progress to see how much time you waste');
  }

}
