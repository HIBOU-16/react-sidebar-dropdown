const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

const RESULTS_DIR = '/home/kali/results';

app.get('/api/scans', (req, res) => {
    fs.readdir(RESULTS_DIR, (err, ipDirectories) => {
        if (err) {
            return res.status(500).send('Error reading results directory');
        }
        let scansData = [];
        ipDirectories.forEach(ipDir => {
            const scanDirPath = path.join(RESULTS_DIR, ipDir, 'scans');
            if (fs.existsSync(scanDirPath) && fs.lstatSync(scanDirPath).isDirectory()) {
                const scanFiles = fs.readdirSync(scanDirPath);
                scanFiles.forEach(file => {
                    const filePath = path.join(scanDirPath, file);
                    if (fs.lstatSync(filePath).isFile()) {
                        const fileData = fs.readFileSync(filePath, 'utf-8');
                        scansData.push({
                            ip: ipDir,
                            fileName: file,
                            content: fileData
                        });
                    }
                });
            }
        });
        res.json(scansData);
    });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
