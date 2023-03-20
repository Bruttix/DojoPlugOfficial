import express from "express";

const router = express.Router();

import {
  prices,
  createRole,
  roleStatus,
  roles,
  customerPortal,
} from "../controllers/subs";
import { requireSignin } from "../middlewares";

router.get("/prices", prices);
router.post("/create-role", requireSignin, createRole);
router.get("/role-status", requireSignin, roleStatus);
router.get("/roles", requireSignin, roles);
router.get("/customer-portal", requireSignin, customerPortal);

module.exports = router;
