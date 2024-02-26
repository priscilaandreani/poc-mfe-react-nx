Como criar um novo remote para a federação?

1. `nx g @nx/react:app cart --directory=apps/cart`
2. Configure o ponto de entrada da aplicação:

- O ponto de entrada da aplicação deve ser o arquivo `boostrap.tsx`
- Importe o boostrap dentro do arquivo `main.tsx`
- Exporte o componente principal da aplicação via `remote-entry.tsx`

3. Crie a configuração do Module Federation `module-federation.config.ts` na raíz do remote

- Defina o nome, os módulos expostos (exposes) e os módulos consumidos (remotes)
- Adicione essa configuração ao webpack da aplicação através do plugin `withModuleFederation`

4. Faça a configuração dos scripts no `project.json`

- Importante utilzar o executor `@nx/react:module-federation-dev-server` para servir o projeto em modo de desenvolvimento

5. Prepare o host para receber o novo remote

- Adicione o novo remote em `devRemotes` dentro do `project.json`
- Adicione o novo remote na lista de remotes no `module-federation.config.js` do host
