import {Router} from 'express';
import {deleteDesignation, retrieveAllDesignation, retrieveDesignationById, saveUpdateDesignation} from '../../controllers/admin/designation.controller.js';

const designationRoute = Router();

designationRoute.route('/save-update-designation').post(saveUpdateDesignation);
designationRoute.route('/delete-designation/:dbId').delete(deleteDesignation);
designationRoute.route('/retrieve-all-designation').get(retrieveAllDesignation);
designationRoute.route('/retrieve-designation-by-id/:dbId').get(retrieveDesignationById);
export default designationRoute;