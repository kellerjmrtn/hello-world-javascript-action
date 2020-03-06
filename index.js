const core = require('@actions/core');
const github = require('@actions/github');
const simpleGit = require("simple-git");

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);


  /* Here is my code -------------------------- */
  const repoToken = core.getInput("repo-token");
  const client = new github.GitHub(repoToken);
  const rawPayload = github.context.payload;
  console.log(simpleGit);
  simpleGit.diff(null, (err, result) => {

    // err is null unless this command failed
    // result is the raw output of this command
    console.log(err);
    console.log(result);
  
  });
} catch (error) {
  core.setFailed(error.message);
}