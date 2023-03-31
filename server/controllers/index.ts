const fs = require('fs');
const path = require('path');

const db = require('../models');

//upload file and save filename and filesize to database
exports.uploadFile = async (req, res, next) => {
    try {
        const file = req.file;

        if (!file) {
            return res.status(400).json({
                message: 'Please upload a file'
            });
        }

        if (file.size > 1024 * 1024 * 10) {
            return res.status(400).json({
                message: 'File size cannot be larger than 10MB'
            });
        }

        const fileName = file.originalname;
        const fileSize = file.size;
        const path = `http://localhost:8000/uploads/${file.filename}`;
        const filedata = await db.File.create({
            fileName,
            fileSize,
            path
        });
        res.status(200).json({
            message: 'File uploaded successfully',
            data: filedata
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Some error occurred while uploading the file'
        });
    }
}

//get all files from database
exports.getFiles = async (req, res) => {
    try {
        const files = await db.File.findAll();
        res.status(200).json({
            message: 'Files retrieved successfully',
            data: files
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Some error occurred while retrieving files'
        });
    }
}


//delete file from database and from uploads folder
exports.deleteFile = async (req, res) => {
    try {
        const id = req.params.id;
        const file = await db.File.findOne({
            where: {
                id,
            }
        });
        if (!file) {
            return res.status(404).json({
                message: `Cannot delete file with id=${id}. File not found!`
            });
        }

        const regularExpression = /uploads\/(.*)/;

        const filePath = path.join(__dirname, `../uploads/${regularExpression.exec(file.path)[1]}`);

        console.log(file);

        fs.unlink(filePath, async (err) => {
            if (err) {
                return res.status(500).json({
                    message: `Could not delete file with id=${err}`
                });
            }
            await db.File.destroy({
                where: {
                    id
                }
            });

            res.status(200).json({
                message: 'File deleted successfully'
            });
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Some error occurred while deleting the file'
        });
    }
}

