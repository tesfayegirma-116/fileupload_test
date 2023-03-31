export { }
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const basename = path.basename(__filename);

// set file types
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "application/pdf") {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

// set storage location
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = "./uploads";
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

// set file size limit
const limits = ({ fileSize: 1024 * 1024 * 10 });

// upload files
const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

module.exports = upload;