import { keepAuthenticationUser, login, verificationUser } from "@/controllers/auth.controller";
import { Router } from "express";
// Middleware
import { loginValidation } from "@/middleware/validation/auth.validation";
import { tokenVerify } from "@/middleware/tokenVerify";

const router = Router()

router.post('/', loginValidation, login)
/*router.get('/', tokenVerify, keepAuthenticationUser)
router.patch('/', tokenVerify, verificationUser)*/

export default router;