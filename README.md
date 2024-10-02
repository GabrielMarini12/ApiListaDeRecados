# ApiListaDeRecados

Api de Login de usuários e Lista de Recados.

# Tecnologia

- Javascript

# Começando
- Para iniciar um projeto em Node:
  - npm init -y

  No package.json alterar no script:
    "scripts": {
      "dev": "node src/index.js"
    },
  
- Dependência Global:
  - npm install -g nodemon

- Dependências de Desenvolvimento:
  - npm install nodemon -D
 
  Rodar com nodemon, mudar no script de package.json para nodemon:
    "scripts": {
      "dev": "nodemon src/index.js"
    },
  
  - npm install sucrase -D

  Criar um arquivo nodemon.json:
    {
    "execMap": {
        "js": "node -r sucrase/register"
      }
    }

- Dependências:
  - npm install express
  - npm install cors
  - npm install bcrypt
  - npm install uuid
 

- Rodar a Api:
  - npm run dev
 
# Deploy
https://apilistaderecados.onrender.com/
