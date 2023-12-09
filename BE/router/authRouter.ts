import express, { Router } from "express"
import { registerUser } from "../Controller/authController"

const router:Router = express.Router()

router.route("/register").post(registerUser)

export default router