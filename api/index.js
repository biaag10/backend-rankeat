import express from 'express';
import dotenv from 'dotenv';
import db from './database/configdb.js';
import userRoutes from './routes/user.route.js'; // importa as rotas de usuário
import exampleRoute from './routes/protected.route.js'; 
import cors from 'cors'; // importa o CORS
import SearchHistoryRoute from './routes/search-history.route.js'; // importa as rotas de histórico de buscas
import FavoriteRoute from './routes/favorite.route.js'; // importa as rotas de favoritos
import CommentRoute from './routes/comment.route.js'; // importa as rotas de comentários
import apiRoutes from './routes/api.route.js'; // importa as rotas de API (Google Maps, Foursquare)

import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './config/swagger.config.js';

dotenv.config();
db.connect();

const app = express();


// Configuração do CORS
app.use(cors({
  origin: '*', // permite requisições de qualquer origem
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], // métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // cabeçalhos permitidos
}));

app.use(express.json()); // para aceitar JSON no corpo das requisições

// Rota para a documentação Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rotas da API
app.use("/users", userRoutes); // Rotas de usuários
app.use("/secure", exampleRoute); // Rotas de exemplo
app.use('/', SearchHistoryRoute); // Rotas de histórico de buscas
app.use('/favorites', FavoriteRoute); // Rotas de favoritos
app.use('/comments', CommentRoute); // Rotas de comentários

// Integrando as rotas de API (Google Maps, Foursquare)
app.use('/', apiRoutes); 

app.get('/', (req, res) => {
  res.send({ message: 'API is running...' });
});

const PORT = process.env.PORT || 3000; // A API pode rodar em outra porta se necessário.

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}/`);
  console.log(`Documentação Swagger disponível em http://localhost:${PORT}/docs`); // Log para URL do Swagger
});
