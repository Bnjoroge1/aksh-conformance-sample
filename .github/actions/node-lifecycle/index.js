const fs = require("fs");

const outputPath = process.env.GITHUB_OUTPUT;
const statePath = process.env.GITHUB_STATE;
const caseName = process.env.INPUT_CASE_NAME || "unknown";

if (!outputPath) {
  throw new Error("GITHUB_OUTPUT is not set");
}
if (!statePath) {
  throw new Error("GITHUB_STATE is not set");
}

const result = `node-ok-${caseName}`;

fs.appendFileSync(outputPath, `node-result=${result}\n`, "utf8");
fs.appendFileSync(statePath, `node_main_result=${result}\n`, "utf8");

console.log(`PASS: node main ran for ${caseName}`);
console.log(`PASS: node output set to ${result}`);
