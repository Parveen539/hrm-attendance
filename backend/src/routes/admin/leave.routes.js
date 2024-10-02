import { Router } from "express";
import { leaveRequest } from '../../controllers/admin/leave.controller.js';

const leaveRoute = Router();
// Save Employee
leaveRoute.route("/employee-request/").post(leaveRequest);

export default leaveRoute;