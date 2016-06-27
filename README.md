# Tutorial de React

Vamos fazer um TodoApp usando React virgem. Como o escopo do curso é apenas React, já deixei uma estrutura pronta pra focarmos apenas nele.

## Instalação e configuração inicial
Clone o repositório ```git@github.com:igor-ribeiro/react-simple-starter.git NOME_DA_PASTA```.

Entre na pasta do app.

Remova a origem do repositório ```git remote remove origin``` e adicione um seu ```git remote add origin git@github.com/USUARIO/REPOSITORIO```

Instale as dependências ```npm install```

Instale globalmente o webpack e webpack-dev-server ``` npm i -g webpack webpack-dev-server```

Inicie o servidor ```webpack-dev-server --content-base public/ --inline```. Acesse o projeto em ```http://localhost:8080/``` e você verá no console ```just react it!```. Pronto, podemos começar.

O projeto final pode ser encontrado em: ```https://github.com/igor-ribeiro/reactodo```

## React

Segundo o [site oficial](https://facebook.github.io/react/), React é uma biblioteca para a criação de interfaces de usuário, ou seja, seria a View do MVC. React é declarivo, baseado em componente e uma biblioteca livre, possibilitando a criação de novas funcionalidades usando React sem afetar o código existente.

Apesar desse slogan ```A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES```, você consegue criar aplicações completas em React, como nós faremos como nosso TodoApp, carinhosamente chamado de ReacTodo.

**Usaremos ES6 :D**
