const fs = require("fs");

const statePath = process.env.GITHUB_STATE;
const caseName = process.env.INPUT_CASE_NAME || "unknown";

if (!statePath) {
  throw new Error("GITHUB_STATE is not set");
}

fs.appendFileSync(statePath, `node_pre_case=${caseName}\n`, "utf8");
console.log(`PASS: node pre ran for ${caseName}`);
