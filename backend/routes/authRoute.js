import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object using route outside seperate file

const router = express.Router();

//routing

//Register/post method
router.post("/register", registerController);

//Login/post method
router.post("/login", loginController);

//Forget Password
router.post("/forgot-password", forgotPasswordController);

//test protected route
router.get("/test", requireSignIn, isAdmin, testController);

//protected user-auth-route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected admin-auth-route
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
export default router;
