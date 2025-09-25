import express from 'express'
import tradesRouter from './trades.route'

const router = express.Router()

router.use("/trades", tradesRouter)

export default router
