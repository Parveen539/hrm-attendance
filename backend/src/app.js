/**
 * @fileOverview Entry point for the Express application.
 * 
 * This file initializes the core of the backend by setting up essential middleware, 
 * defining API routes, handling errors, and establishing the database connection.
 * 
 * Dependencies:
 * - `express`: Framework for building the server.
 * - `cors`: Middleware to enable CORS for cross-origin resource sharing.
 * - `cookie-parser`: Middleware for parsing cookies.
 * - `morgan`: HTTP request logger.
 * - `connectDB`: Custom utility for database connection.
 * - `employeeRoute`: Route module for employee management.
 * - `ApiResponse`: Custom response structure for API responses and error handling.
 * 
 * Middleware:
 * - **CORS Configuration**: Configures cross-origin access, ensuring the frontend (default: `http://localhost:3000`) 
 *   can make API requests, with credentials such as cookies enabled.
 * - **Body Parsing**: Limits JSON and URL-encoded payload sizes to 5048kb.
 * - **Static Files**: Serves static files from the `/public` directory.
 * - **Cookie Parsing**: Parses incoming request cookies.
 * - **HTTP Request Logging**: Logs all incoming HTTP requests in development mode using `morgan`.
 * 
 * Routes:
 * - `/zarud-admin/api/v1/employee`: Mounts employee-related API endpoints via the `employeeRoute` module.
 * 
 * Error Handling:
 * - Custom error handling middleware intercepts thrown errors or failed promises and returns a structured API response.
 *   - If the error is an instance of `ApiError`, the appropriate status code and error message are returned.
 *   - For all other unhandled errors, a 500 Internal Server Error is returned.
 * 
 * Database:
 * - Establishes a connection to the database using `connectDB()`. Logs the database name upon successful connection.
 * 
 * Server:
 * - Starts the server on the port specified by the environment variable `PORT` or defaults to `3000`.
 * 
 * Example:
 * ```
 * Server is running on port 3000
 * Connected to database: myDatabase
 * ```
 */

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import connectDB from './config/db.js';
import employeeRoute from './routes/admin/employee.routes.js';
import leaveRoute from './routes/admin/leave.routes.js' 
import departmentRoute from './routes/admin/dapartment.route.js';
// import designationRoute from './routes/admin/designation.route.js';
import { ApiResponse } from './utils/ApiResponse.js';  // Ensure ApiResponse is imported for error handling
import valRoute from './routes/admin/validate.routes.js';
// import fileRouter from './routes/admin/file.routes.js';

const app = express();

// Middleware for handling CORS, body parsing, static files, cookies, and logging
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',  // Allow frontend to access the API
    credentials: true  // Allow credentials (cookies) in requests
}));
app.use(express.json({ limit: "5048kb" }));  // Parse incoming JSON requests, limit to 5MB
app.use(express.urlencoded({ extended: true, limit: "5048kb" }));  // Parse URL-encoded form data
app.use('/public', express.static('public'));  // Serve static assets from 'public' directory
app.use(cookieParser());  // Parse cookies from incoming requests
app.use(morgan('dev'));  // Log HTTP requests in development mode

// Mount employee-related routes under the `/zarud-admin/api/v1/employee` namespace
app.use("/zarud-admin/api/v1/employee", employeeRoute);
app.use("/zarud-admin/api/v1/leave", leaveRoute);
app.use("/zarud-admin/api/v1/validation",valRoute);
app.use('/zarud-admin/api/v1/department', departmentRoute);
// app.use('/zarud-admin/api/v1/download', fileRouter);
// app.use('/zarud-admin/api/v1/designation', designationRoute);
// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);  // Log the error stack trace
    res.status(500).json(new ApiResponse(500, null, "Something went wrong!"));  // Send structured API response
});

// Connect to the database and start the server
const dbConnection = connectDB();  // Establish DB connection

// Start the server and listen on specified port or default to 3000
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
