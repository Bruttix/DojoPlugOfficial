import express from "express";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";

// controllers
import {
  register,
  login,
  logout,
  currentUser,
  forgotPassword,
  resetPassword, roles
} from "../controllers/auth";

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/current-user", requireSignin, currentUser);
router.post("/forgot-password", forgotPassword);
router.get("/subscribe", requireSignin);
router.post("/reset-password", resetPassword);

//router.post("/subscribe", requireSignin, currentUser);

router.get("/account", requireSignin, roles);


module.exports = router;