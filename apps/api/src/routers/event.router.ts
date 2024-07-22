import { findAllEvents, findEventsByOrganizerUid } from "@/controllers/event.controller";
import { tokenVerify } from "@/middleware/tokenVerify";
import { Router } from "express";

const router = Router()

router.get('/', findAllEvents)
router.get('/:organizer_uid', tokenVerify, findEventsByOrganizerUid)
/*router.get('/:year', findEventsByYear)
router.get('/:year/:month', findEventsByMonth)*/

export default router