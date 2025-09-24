import { Sequelize } from 'sequelize';

let sequelize;

export function ProducaoOuTeste(estado, dialect) {
  const string = estado.toLowerCase().trim();

  if (string === 'teste') {
    if (!sequelize) {
      sequelize = new Sequelize(
        process.env.DB_NAME_LOCAL,
        process.env.DB_USER_LOCAL,
        process.env.DB_PASSWORD_LOCAL,
        {
          host: process.env.DB_HOST_LOCAL,
          dialect: dialect,
          port: process.env.DB_PORT_LOCAL,
          logging: console.log,
        }
      );
    }
    return sequelize;
  }  

  if (string === 'producao') {
    if (!sequelize) {
      sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
          host: process.env.DB_HOST,
          dialect: 'postgres',
          port: process.env.DB_PORT,
          logging: console.log,
        }
      );
    }
    return sequelize;
  } 

  console.log("OPÇÃO INVÁLIDA");
  return undefined;
}
