import { Router } from "express";
import { employeeRegister, employeeRetrieveAll, employeeRetrieveByID, employeeUpdateByID } from '../../controllers/admin/employee.controller.js';

const employeeRoute = Router();
// Save Employee
employeeRoute.route("/retrieve-all-employees/").get(employeeRetrieveAll);
employeeRoute.route("/retrieve-employee/").post(employeeRetrieveByID);
employeeRoute.route("/employee-register/").post(employeeRegister);
employeeRoute.route("/update-employee/").post(employeeUpdateByID);

export default employeeRoute;