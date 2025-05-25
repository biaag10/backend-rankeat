const { execSync } = require('child_process');
const path = require('path');

// Define o diretório base dos scripts de requisição
const requestsDir = path.resolve(__dirname, '../requests');

describe('Execução dos Scripts de Requisição Shell', () => {
  // Lista dos scripts a serem testados (caminhos relativos a requestsDir)
  const scripts = [
    'GET_Protected_Route.sh',
    'POST_Login_User.sh',
    'POST_Register_User.sh',
    'favorites/DELETE_Favorites.sh',
    'favorites/POST_Favorites.sh',
    'search-history/GET_SearchHistory.sh',
    'search-history/POST_SearchHistory.sh',
  ];

  scripts.forEach(scriptRelativePath => {
    const scriptFullPath = path.join(requestsDir, scriptRelativePath);
    // Garante que o caminho use barras normais, mesmo no Windows (embora estejamos no Linux)
    const normalizedScriptPath = scriptFullPath.replace(/\\/g, '/');
    const testName = `deve executar ${scriptRelativePath} com sucesso`;

    it(testName, () => {
      try {
        // Adiciona permissão de execução e executa o script shell
        // Usamos stdio: 'pipe' para capturar a saída se necessário, e evitar que polua o output do Jest
        // O timeout é aumentado para dar tempo aos scripts de rede (ajuste se necessário)
        const output = execSync(`\"${normalizedScriptPath}\"`, { stdio: "pipe", timeout: 15000 });
        // Se chegou aqui, o script executou com código de saída 0
        expect(true).toBe(true); // Afirmação explícita de sucesso
      } catch (error) {
        // Se o script falhar (código de saída diferente de 0), execSync lança um erro
        console.error(`Erro ao executar ${scriptRelativePath}:\nSaída Padrão:\n${error.stdout}\nErro Padrão:\n${error.stderr}`);
        // Falha o teste explicitamente, mostrando o erro
        throw new Error(`Falha ao executar ${scriptRelativePath}. Veja o console para detalhes.`);
      }
    });
  });
});

