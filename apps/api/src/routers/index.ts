import { Router } from "express";
import authRouter from "./auth.router";
import eventRouter from "./event.router";
import transactionRouter from "./transactions.router";

const router = Router()

router.use('/auth', authRouter)
router.use('/events', eventRouter)
router.use('/transactions', transactionRouter)

export default router;