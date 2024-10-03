import mysql2 from 'mysql2';

/**
 * Create a Promise-based function for inserting data.
 */
export const create = (table, data, connection) => {
    return new Promise((resolve, reject) => {
        const columns = Object.keys(data);
        const values = Object.values(data);
        const placeholders = columns.map(() => '?').join(', ');
        const sql = `INSERT INTO ${mysql2.escapeId(table)} (${columns.join(', ')}) VALUES (${placeholders})`;
        
        connection.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error inserting data:', err);
                return reject(err);
            }
            resolve(result);
        });
    });
};

/**
 * Read data from the database.
 */
export const read = (table, conditions, connection) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM ${mysql2.escapeId(table)}`;
        const values = [];
        
        if (conditions) {
            const columns = Object.keys(conditions);
            const conditionClauses = columns.map(col => `${mysql2.escapeId(col)} = ?`).join(' AND ');
            sql += ` WHERE ${conditionClauses}`;
            values.push(...Object.values(conditions)); // Spread operator to flatten the array
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

/**
 * Update data in the database.
 */
export const update = (table, data, conditions, connection) => {
    return new Promise((resolve, reject) => {
        const updateClauses = Object.keys(data).map(col => `${mysql2.escapeId(col)} = ?`).join(', ');
        const sql = `UPDATE ${mysql2.escapeId(table)} SET ${updateClauses} WHERE ${mysql2.escapeId(Object.keys(conditions)[0])} = ?`;
        
        connection.query(sql, [...Object.values(data), ...Object.values(conditions)], (err, result) => {
            if (err) {
                console.error('Error updating data:', err);
                return reject(err);
            }
            resolve(result);
        });
    });
};

/**
 * Remove data from the database.
 */
export const remove = (table, conditions, connection) => {
    return new Promise((resolve, reject) => {
        const conditionClauses = Object.keys(conditions).map(col => `${mysql2.escapeId(col)} = ?`).join(' AND ');
        const sql = `DELETE FROM ${mysql2.escapeId(table)} WHERE ${conditionClauses}`;
        
        connection.query(sql, Object.values(conditions), (err, result) => {
            if (err) {
                console.error('Error deleting data:', err);
                return reject(err);
            }
            resolve(result);
        });
    });
};

/**
 * Execute a custom SQL query.
 */
export const executeCustomQuery = (sql, data, connection) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, data, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return reject(err);
            }
            resolve(result);
        });
    });
};
