import { asyncHandler } from "../utils/AsyncHandler";


export const dbDownload=asyncHandler( (req, res) => {
    const backupFileName = `backup-${Date.now()}.sql`; // Create a unique file name
    const backupFilePath = path.join(__dirname, backupFileName);

    // Command to export the database
    const dumpCommand = `mysqldump -u ${dbConfig.user} -p${dbConfig.password} ${dbConfig.database} > ${backupFilePath}`;

    exec(dumpCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error exporting database: ${stderr}`);
            return res.status(500).send('Error exporting database');
        }

        // Send the file for download
        res.download(backupFilePath, (err) => {
            if (err) {
                console.error(`Error sending file: ${err}`);
                res.status(500).send('Error sending file');
            } else {
                // Optionally, delete the file after sending
                fs.unlinkSync(backupFilePath);
            }
        });
    });
});
