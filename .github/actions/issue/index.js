const core = require('@actions/core')

const github = require('@actions/github')

let run = async () => {

    try {
        const token = core.getInput('token')
        const title = core.getInput('title')
        const body = core.getInput('body')
        const assignees = core.getInput('assignees')
        
        const octokit = new github.GitHub(token)

        const octo = new github.getOctokit(token)

        // Bad Code
        /*

        const octokit = new github.GitHub(token)

        const response = await octokit.create({
            owner: github.context.repo.owner,
            repo: github.context.repo.repo,
            title: title,
            body: body,
            assignees: assignees ? assignees.split('\n') : undefined
        })        

        */

        // const octokit = new github.getOctokit(token)

        // console.log(JSON.stringify(octokit, null,'\n'))


        core.setOutput('issue', JSON.stringify(response.data))
    } catch (error)
    {
        core.setFailed(error.message)
    }

};

run()