import express from 'express';
import dotenv from 'dotenv';
import db from './database/configdb.js';
import userRoutes from './routes/user.route.js'; // importa as rotas de usuário
import User from './models/User.js'; // cria a collection de users
import exampleRoute from './routes/protected.route.js'; 
import cors from 'cors'; // importa o CORS
import SearchHistory from './models/SearchHistory.js'; // cria a collection de histórico de buscas
import SearchHistoryRoute from './routes/search-history.route.js'; // importa as rotas de histórico de buscas
import FavoriteRoute from './routes/favorite.route.js'; // importa as rotas de favoritos
import Favorite from './models/Favorite.js'; // cria a collection de favoritos

dotenv.config();
db.connect();

const app = express();

// Configuração do CORS
// app.use(cors({
//   origin: 'https://frontend-workout-tracker.vercel.app',  // permite requisições do frontend na porta 3001
//   methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],  // métodos permitidos
//   allowedHeaders: ['Content-Type', 'Authorization'],  // cabeçalhos permitidos
// }));

app.use(express.json()); // para aceitar JSON no corpo das requisições

app.use("/users", userRoutes); // define o prefixo para as rotas de usuário
app.use("/secure", exampleRoute); // define o prefixo para as rotas de exemplo
app.use('/', SearchHistoryRoute); // define o prefixo para as rotas de histórico de buscas
app.use('/', FavoriteRoute); // define o prefixo para as rotas de favoritos

app.get('/', (req, res) => {
  res.send({ message: 'API is running...' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}/`);
});
