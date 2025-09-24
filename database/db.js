import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { ProducaoOuTeste } from '../util/areaBanco.js';

dotenv.config();

let opcao = 'teste'.trim().toLowerCase();

const sequelize = ProducaoOuTeste(opcao, 'mysql');

async function conectarBanco() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados bem-sucedida!');

    await sequelize.sync({ logging: console.log });
    console.log('Tabelas sincronizadas.');

    console.log('Conectado ao banco:', sequelize.getDatabaseName());

  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
    process.exit(1);
  }
}

export { sequelize, conectarBanco };
