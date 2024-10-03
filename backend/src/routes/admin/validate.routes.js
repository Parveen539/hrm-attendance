import { Router } from "express";
//import { employeeRegister, employeeRetrieveAll, employeeRetrieveByID, employeeUpdateByID } from '../../controllers/admin/employee.controller.js';
import { changePassword, forgetPassword, loginCheck, otpCheck, resetPassword } from "../../controllers/admin/login.controller.js";
import { checkLogin } from "../../middlewares/checkLogin.js";

const valRoute = Router();
// Save Employee
valRoute.route("/change-password/").post(checkLogin,changePassword);
valRoute.route("/forget-password/").post(forgetPassword);
valRoute.route("/verify-otp/").post(otpCheck);
valRoute.route("/reset-password/").post(resetPassword);
valRoute.route("/isValid/").post(loginCheck);


export default valRoute;