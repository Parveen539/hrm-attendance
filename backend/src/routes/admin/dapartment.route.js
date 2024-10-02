import { Router } from "express";

const employeeRoute = Router();
// Save Employee
employeeRoute.route("/save-update-department/").get(employeeRetrieveAll);

export default employeeRoute;