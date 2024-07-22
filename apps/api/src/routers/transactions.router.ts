import { findAllTransactions } from "@/controllers/transaction.controller";
import { Router } from "express";

const router = Router()

router.get('/', findAllTransactions)

export default router