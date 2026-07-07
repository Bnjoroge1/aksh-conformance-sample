const core = require('@actions/core');
const greeting = core.getInput('greeting') || 'Hello';
console.log(`${greeting} from local node action!`);
core.setOutput('result', `${greeting} World`);
