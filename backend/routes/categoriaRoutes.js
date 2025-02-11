import express from 'express';
import { getCategorias } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getCategorias);

export default router;
