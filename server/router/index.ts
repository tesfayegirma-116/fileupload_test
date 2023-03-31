export { }
const express = require('express');
const router = express.Router();

const upload = require('../middleware');

const { uploadFile, getFiles, deleteFile} = require('../controllers');


router.post('/upload', upload.single("file"), uploadFile);

router.get('/files', getFiles);

router.delete('/file/:id', deleteFile);

module.exports = router;