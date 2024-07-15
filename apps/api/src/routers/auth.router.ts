import { login } from "@/controllers/auth.controller";
import { Router } from "express";
// Middleware
import { loginValidation } from "@/middleware/validation/auth.validation";

const router = Router()

router.post('/login', loginValidation, login)

export default router;