import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API RankEat',
      version: '1.0.0',
      description: 'Documentação da API RankEat',
    },
    servers: [
      {
        url: 'http://localhost:3000/api', // ajuste conforme seu backend
      },
    ],
  },
  apis: ['./routes/*.js'], // ajuste para seus arquivos de rotas JS
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
