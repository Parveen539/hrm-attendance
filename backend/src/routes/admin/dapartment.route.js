import { Router } from "express";
import { saveUpdateDepartment, deleteDepartment } from "../../controllers/admin/department.controller.js";

const departmentRoute = Router();
// Save or update department
departmentRoute.route("/save-update-department").post(saveUpdateDepartment);
departmentRoute.route('delete-dapertment/:dbId').delete(deleteDepartment);
export default departmentRoute;
