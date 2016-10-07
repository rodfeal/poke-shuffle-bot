export default class InputParser {

  isAskingForAbility(text) {
    const pattern = "/ability";
    return text.match(pattern);
  }

  isAskingForGreeting(text) {
    const pattern = "/start";
    return text.match(pattern);
  }
}
