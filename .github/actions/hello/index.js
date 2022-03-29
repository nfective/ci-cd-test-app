const core = require("@actions/core");
const github = require("@actions/github");

try {
  // throw new Error("Some error")

  const name = core.getInput("who-to-greet");

  console.log(`Hello ${name}`);

  const time = new Date();

  core.setOutput("time", time.toTimeString());

  core.startGroup("This starts the beginnning of the group")

  console.log("I am grouped")

  core.endGroup()

  core.setSecret("I am a secret")

  core.exportVariable("Greet", "Hello")

  console.log(JSON.stringify(github, null, "\t"));
} catch (error) {
  core.setFailed(error.message);
}
