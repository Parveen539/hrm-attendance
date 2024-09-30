import { Router } from "express";
import { employeeRegister } from '../../controllers/admin/employee.controller.js';

const employeeRoute = Router();
// Save Employee
employeeRoute.route("/employee-register/").post(employeeRegister);

export default employeeRoute;