import dotenv from 'dotenv';
//import mysql, { createConnection } from 'mysql';
import mysql2, { createConnection } from 'mysql2';

// Load environment variables from the .env file
dotenv.config({ path: '.env' });

// Create a database connection
const connectDB = () => {
    const connection = createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT || 3306,
        connectTimeout: 20000000  // Set a 10-second timeout (increase if needed)
    });

    connection.connect((err) => {
        if (err) {
            console.error(`Database connection error: ${err.message}`);
            setTimeout(connectDB, 2000);  // Retry after 2 seconds
        } else {
            console.log('Connected to the database');
            showTables(connection);
        }
    });

    return connection;
};
// Function to fetch and log all table names and their columns
const showTables = (connection) => {
    const query = 'SHOW TABLES';
    connection.query(query, (err, results) => {
        if (err) {
            console.error(`Error fetching tables: ${err.message}`);
            return;
        }

        console.log('Tables in the database:');
        results.forEach((row) => {
            const tableName = Object.values(row)[0];
            console.log(`Table: ${tableName}`);

            // Fetch and log the columns of the current table
            showColumns(connection, tableName);
        });
    });
};
// Function to fetch and log column names of a specific table
const showColumns = (connection, tableName) => {
    const query = `SHOW COLUMNS FROM \`${tableName}\``; // Use backticks to avoid issues with table names
    connection.query(query, (err, results) => {
        if (err) {
            console.error(`Error fetching columns for table ${tableName}: ${err.message}`);
            return;
        }

        console.log(`Columns in ${tableName}:`);
        results.forEach((column) => {
            console.log(` - ${column.Field}`); // Print the column name
        });
    });
};
export default connectDB;
