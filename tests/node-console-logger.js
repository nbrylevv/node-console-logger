const { NodeConsoleLogger } = require('../src/node-console-logger');

const nodeConsoleLogger = new NodeConsoleLogger('node-console-logger test');

nodeConsoleLogger.text('Text message');
nodeConsoleLogger.info('Info message');
nodeConsoleLogger.warn('Warn message');
nodeConsoleLogger.fail('Fail message');
nodeConsoleLogger.success('Success message');
