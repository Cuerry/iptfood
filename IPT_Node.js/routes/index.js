import express from 'express'
import IptRoutes from './ipt.routes.js'
const router = express.Router()

/**
 * @openapi
 * /healthcheck:
 *  get:
 *     tags:
 *     - Healthcheck
 *     description: Returns API operational status
 *     responses:
 *       200:
 *         description: API is  running
 */
router.get('/healthcheck', (req, res) => res.sendStatus(200))

router.use(IptRoutes)

export default router