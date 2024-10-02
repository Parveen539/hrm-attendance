import mysql from 'mysql'; // Ensure mysql is imported

/**
 * @fileOverview Example usage of CRUD operations with a MySQL database using promises.
 * 
 * This file demonstrates how to connect to a MySQL database and perform basic 
 * CRUD (Create, Read, Update, Delete) operations using a utility module.
 * 
 * USE CASES:
 * 
 * 1. **Creating a New Employee**: 
 *    - Use the `create` function to add a new employee to the `zarud_employee` table.
 * 
 * 2. **Reading Employees**: 
 *    - Use the `read` function to retrieve employee records from the `zarud_employee` table 
 *      based on specified conditions (e.g., employee name).
 * 
 * 3. **Updating an Employee**: 
 *    - Use the `update` function to modify existing employee details in the `zarud_employee` table 
 *      using a unique identifier (e.g., employee ID).
 * 
 * 4. **Deleting an Employee**: 
 *    - Use the `remove` function to delete an employee from the `zarud_employee` table using a unique identifier.
 * 
 * 5. **Executing Custom SQL Queries**: 
 *    - Use the `executeQuery` function to run any custom SQL query against the `zarud_employee` table 
 *      and retrieve results based on specific criteria.
 * 
 * EXAMPLE USAGE:
 * 
 * import connectDB from "./config/db.js"; // Import your connection function
 * import { create, read, update, remove, executeQuery } from "./utils/CrudHelper.js";
 * 
 * const connection = connectDB(); // Establish the connection
 * 
 * // Example usage for creating a new employee
 * create('zarud_employee', { name: 'John Doe' }, connection)
 *     .then(result => console.log('Employee created:', result))
 *     .catch(err => console.error(err));
 * 
 * // Example usage for reading employees
 * read('zarud_employee', { name: 'John Doe' }, connection)
 *     .then(result => console.log('Employees found:', result))
 *     .catch(err => console.error(err));
 * 
 * // Example usage for updating an employee
 * update('zarud_employee', { name: 'Jane Doe' }, { id: 1 }, connection)
 *     .then(result => console.log('Employee updated:', result))
 *     .catch(err => console.error(err));
 * 
 * // Example usage for deleting an employee
 * remove('zarud_employee', { id: 1 }, connection)
 *     .then(result => console.log('Employee deleted:', result))
 *     .catch(err => console.error(err));
 * 
 * // Example usage for executing a custom SQL query
 * executeQuery('SELECT * FROM zarud_employee WHERE name = ?', ['John Doe'], connection)
 *     .then(result => console.log('Custom query result:', result))
 *     .catch(err => console.error(err));
 */

// Create a Promise-based function for inserting data
export const create = (table, data, connection) => {
    return new Promise((resolve, reject) => {
        const columns = Object.keys(data);
        const values = Object.values(data);

        const placeholders = columns.map(() => '?').join(', ');
        const sql = `INSERT INTO ${mysql.escapeId(table)} (${columns.join(', ')}) VALUES (${placeholders})`;
        
        connection.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error inserting data:', err);
                return reject(err);
            }
            resolve(result);
        });
    });
};

// Read data from the database
export const read = (table, conditions, connection) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM ${mysql.escapeId(table)}`;
        const values = [];

        if (conditions) {
            sql += ` WHERE ?`;
            values.push(conditions);
        }

        connection.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error reading data:', err);
                return reject(err);
            }
            resolve(result);
        });
    });
};

// Update data in the database
export const update = (table, data, conditions, connection) => {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE ${mysql.escapeId(table)} SET ? WHERE ?`;
        connection.query(sql, [data, conditions], (err, result) => {
            if (err) {
                console.error('Error updating data:', err);
                return reject(err);
            }
            resolve(result);
        });
    });
};

// Remove data from the database
export const remove = (table, conditions, connection) => {
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM ${mysql.escapeId(table)} WHERE ?`;
        connection.query(sql, [conditions], (err, result) => {
            if (err) {
                console.error('Error deleting data:', err);
                return reject(err);
            }
            resolve(result);
        });
    });
};

// Execute a custom SQL query
export const executeQuery = (sql, values, connection) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return reject(err);
            }
            resolve(result);
        });
    });
};