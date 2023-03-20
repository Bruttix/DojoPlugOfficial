import express from "express";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";

// controllers
import {
  makeInstructor,
  paidBronze, paidSilver,
  paidGold, paidPlatinum,
  paidDiamond, paidStargem,
  getAccountStatus,
  getAccountBronze, getAccountSilver,
  getAccountGold, getAccountPlatinum,
  getAccountDiamond, getAccountStargem,
  currentInstructor, currentBronze, currentSilver,
  currentGold, currentPlatinum, currentDiamond, currentStargem,
  instructorCourses,
  studentCount,
  instructorBalance,
  instructorPayoutSettings,
} from "../controllers/instructor";
/*import {
    uploadImage,
    removeImage,
    create,
    read,
    uploadVideo,
    removeVideo,
    addLesson,
    update,
    removeLesson,
    updateLesson,
    publishCourse,
    unpublishCourse,
    courses,
    checkEnrollment,
    freeEnrollment,
    paidEnrollment, paidBronze,
    stripeSuccess,
    userCourses,
    markCompleted,
    listCompleted,
    markIncomplete,
} from "../controllers/course";*/


router.post("/make-instructor", requireSignin, makeInstructor);
// tier subscriber update
router.post("/make-bronze", requireSignin, paidBronze);
router.post("/make-silver", requireSignin, paidSilver);
router.post("/make-gold", requireSignin, paidGold);
router.post("/make-platinum", requireSignin, paidPlatinum);
router.post("/make-diamond", requireSignin, paidDiamond);
router.post("/make-stargem", requireSignin, paidStargem);

router.post("/get-account-status", requireSignin, getAccountStatus);
// tier subscriptions
router.post("/get-account-bronze", requireSignin, getAccountBronze);
router.post("/get-account-silver", requireSignin, getAccountSilver);
router.post("/get-account-gold", requireSignin, getAccountGold);
router.post("/get-account-platinum", requireSignin, getAccountPlatinum);
router.post("/get-account-diamond", requireSignin, getAccountDiamond);
router.post("/get-account-stargem", requireSignin, getAccountStargem);
// tier current-tier checker
router.get("/current-bronze", requireSignin, currentBronze);
router.get("/current-silver", requireSignin, currentSilver);
router.get("/current-gold", requireSignin, currentGold);
router.get("/current-platinum", requireSignin, currentPlatinum);
router.get("/current-diamond", requireSignin, currentDiamond);
router.get("/current-stargem", requireSignin, currentStargem);

router.get("/current-instructor", requireSignin, currentInstructor);

router.get("/instructor-courses", requireSignin, instructorCourses);

router.post("/instructor/student-count", requireSignin, studentCount);

router.get("/instructor/balance", requireSignin, instructorBalance);

router.get(
  "/instructor/payout-settings",
  requireSignin,
  instructorPayoutSettings
);

module.exports = router;
