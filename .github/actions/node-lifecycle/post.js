const preCase = process.env.STATE_node_pre_case || "";
const mainResult = process.env.STATE_node_main_result || "";

if (!preCase) {
  throw new Error("STATE_node_pre_case missing in post");
}
if (!mainResult) {
  throw new Error("STATE_node_main_result missing in post");
}

console.log(`PASS: node post saw pre state ${preCase}`);
console.log(`PASS: node post saw main state ${mainResult}`);
