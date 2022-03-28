const core = require("@actions/core");
const github = reqiore("@actions/github");

try {
  // throw new Error("Some error")

  const name = core.getInput("who-to-greet");

  console.log(`Hello ${name}`);

  const time = new Date();

  core.setOutput("time", time.toTimeString());

  console.log(JSON.stringify(github, null, "\t"));
} catch (error) {
  core.setFailed(error.message);
}
