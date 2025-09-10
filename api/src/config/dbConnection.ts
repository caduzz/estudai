import mongoose from "mongoose";

async function databaseConnection() {
  const uri = process.env.MONGO_URI; 

  if (!uri) {
    console.error("Erro: A variável de ambiente MONGO_URI não foi definida.");
    process.exit(1);
  }

  await mongoose.connect(uri);

  const db = mongoose.connection;

  db.on("error", (err) => {
    console.error("Erro na conexão com MongoDB:", err);
  });

  db.once("open", () => {
    console.log("Conectado ao MongoDB com sucesso!");
  });

  return db;
}

export default databaseConnection;