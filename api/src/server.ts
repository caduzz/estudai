import 'dotenv/config';
import App from './app';
import databaseConnection from './config/dbConnection';

const PORT = process.env.PORT || 4545;

(async () => {
  try{
    await databaseConnection();
    console.log("Conectado ao MongoDB com sucesso!");
    
    new App().start(PORT);
  } catch (err) {
    console.error("Erro ao inicializar a aplicação:", err);
  }
})();