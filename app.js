import express from 'express';
import Usuario from './models/usuario.js';
import { conectarBanco } from './database/db.js';
import { router as userRoutes } from './routes/usuarioRoutes.js';
import cors from 'cors';


const app = express();

app.use(express.json());
app.listen(3000, '0.0.0.0')
app.use(cors({ origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'] }));

app.use('/usuarios', userRoutes);

app.get('/', (req, res) => {
    console.log("API RUN");
    res.send("API RUN");
});

async function startServer() {
    await conectarBanco();

    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000 🚀');
        console.log('http://localhost:3000');
    });
}

startServer();
