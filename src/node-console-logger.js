const COLORS = require('./_colors');

class NodeConsoleLogger {
  constructor(messagePrefix) {
    this.messagePrefix = messagePrefix;
  }

  _log(color, message, skipPrefix = false) {
    if (!this.messagePrefix || skipPrefix) {
      console.log(`${color}${message}`);
      return;
    }
    console.log(`${COLORS.DEFAULT}${this.messagePrefix}: ${color}${message}`);
  }

  text(message, skipPrefix = false) {
    this._log(COLORS.DEFAULT, message, skipPrefix);
  }

  info(message, skipPrefix = false) {
    this._log(COLORS.BLUE, message, skipPrefix);
  }

  warn(message, skipPrefix = false) {
    this._log(COLORS.YELLOW, message, skipPrefix);
  }

  fail(message, skipPrefix = false) {
    this._log(COLORS.RED, message, skipPrefix);
  }

  success(message, skipPrefix = false) {
    this._log(COLORS.GREEN, message, skipPrefix);
  }
}

module.exports = {
  NodeConsoleLogger,
};
