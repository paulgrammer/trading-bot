import express from 'express'
import * as tradeController from '../controllers/trade.controller'

const router = express.Router()

router.get("/fetch", tradeController.get)

export default router
