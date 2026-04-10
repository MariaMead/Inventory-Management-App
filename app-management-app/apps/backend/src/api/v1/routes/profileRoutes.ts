import { Router } from "express";
import { getProfile, updateProfile, getAllProfiles } from "../controllers/profileController";
import { AuthenticateUser } from "../middleware/authentication";
import { requireAdmin } from "../middleware/requireAdmin";
import { requireAuth } from "@clerk/express";

const router: Router = Router();

router.get("/", requireAuth, AuthenticateUser, requireAdmin, getAllProfiles);
router.get("/:id", requireAuth, AuthenticateUser,getProfile);
router.put("/:id", requireAuth, AuthenticateUser, updateProfile);

export default router;