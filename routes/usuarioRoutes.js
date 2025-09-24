import express from 'express';
import { Cadastro, Login } from '../controllers/usuarioController.js';
export const router = express.Router()

router.post('/login', Login);
router.post('/cadastro', Cadastro);

