import { Router } from "express";

import controller from '../controllers/github.controller.js'

const router = Router()

router.get('/repo', controller.findRepo)

const githubRouter = {
  router
}

export default githubRouter