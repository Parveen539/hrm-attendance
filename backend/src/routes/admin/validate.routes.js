import { Router } from "express";
import { employeeRegister, employeeRetrieveAll, employeeRetrieveByID, employeeUpdateByID } from '../../controllers/admin/employee.controller.js';
import { changePassword, loginCheck } from "../../controllers/admin/login.controller.js";
import { checkLogin } from "../../middlewares/checkLogin.js";

const valRoute = Router();
// Save Employee
valRoute.route("/change-password/").post(checkLogin,changePassword);
valRoute.route("/isValid/").post(loginCheck);


export default valRoute;