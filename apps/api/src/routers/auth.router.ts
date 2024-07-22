import { keepAuthenticationUser, login, register } from "@/controllers/auth.controller";
import { Router } from "express";
// Middleware
import { loginValidation } from "@/middleware/validation/login.validation";
import { tokenVerify } from "@/middleware/tokenVerify";

const router = Router()

router.post('/', loginValidation, login)
router.post('/register', register)
router.get('/', tokenVerify, keepAuthenticationUser)
//router.patch('/', tokenVerify, verificationUser)

export default router;