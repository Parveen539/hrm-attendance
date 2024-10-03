import { Router } from "express";
import { employeeRetrieveAll, employeeRetrieveFilteredRecords, employeeRegister, employeeUpdateByID } from '../../controllers/admin/employee.controller.js';

const employeeRoute = Router();

employeeRoute.route("/retrieve-all-employees/").get(employeeRetrieveAll);
employeeRoute.route("/retrieve-filtered-employee/").post(employeeRetrieveFilteredRecords);
employeeRoute.route("/employee-register/").post(employeeRegister);
employeeRoute.route("/update-employee/").post(employeeUpdateByID);



export default employeeRoute;