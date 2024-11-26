import { Octokit } from "octokit";

import contentParser from '../util/parser.js'
import buildResponse from '../util/responseHandler.js'

const octokit = new Octokit();

const filterData = (data) => {

}

const findRepo = async (req, res) => {
  try {
    const githubResponse = await octokit.request('GET /orgs/takenet/repos', {
      org: 'ORG',
      sort: 'created',
      direction: 'asc',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    let data = contentParser(githubResponse)
    data = data.filter(e => e.language === 'C#')
    data = data.slice(0, 5)

    const response = buildResponse(200, 'success', data, null)

    return res.status(200).send(response);
  } catch (error) {
    const response = buildResponse(500, 'failure', null, error)
    return res.status(500).send(response);
  }
}

const controller = {
  findRepo
}

export default controller
