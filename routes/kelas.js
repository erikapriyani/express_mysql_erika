var express = require('express');
var router = express.Router();
var kelas = require('../controller/kelasController')
/**
 * INDEX kelas
 */
router.get('/', kelas.getAllkelas);
/**
 * INDEX kelas berdasarkan id
 */
router.get('/:id', kelas.getKelasId);
/**
 * STORE POST kelas
 */
router.post('/',kelas.createKelas);
/**
 * UPDATE kelas
 */
router.put('/:id', kelas.updateKelas);
/**
 * DELETE kelas
 */
router.delete('/:id', kelas.deleteKelas);

module.exports = router;