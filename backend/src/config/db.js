import dotenv from 'dotenv';
import mysql, { createConnection } from 'mysql';

// Load environment variables from the .env file
dotenv.config({ path: '.env' });

// Create a database connection
const connectDB = () => {
    const connection = createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });

    connection.connect((err) => {
        if (err) {
            console.error(`Database connection error: ${err}`);
            setTimeout(connectDB, 2000); // Retry after 2 seconds
        } else {
            console.log('Connected to the database');
        }
    });

    return connection;
};

export default connectDB;
