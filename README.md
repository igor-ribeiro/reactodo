# Tutorial de React

Vamos fazer um TodoApp usando React virgem. Como o escopo do curso é apenas React, já deixei uma estrutura pronta pra focarmos apenas nele.

# Sumário
- [Instalação e configuração inicial](#instalação-e-configuração-inicial)
- [React](#react)
- [Por que React?](#por-que-react)
  - [One-way-data-binding](#one-way-data-binding)
  - [Virtual DOM](#virtual-dom)
- [Pondo a mão na massa](#pondo-a-mão-na-massa)
- [Pondo a mão na massa pra valer](#pondo-a-mão-na-massa-pra-valer)
  - [Material UI](#material-ui)

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

## Por que React?

### One-way-data-binding

Se você já usou AngularJS sabe que o estado da aplicação pode ser alterado de duas maneiras, na view e no controller, o famoso ```two-way-data-binding```. Mas os engenheiros do Facebook não acreditam que essa seja a melhor maneira, pois o seu estado fica muito 'solto', elem acreditam que o estado deve ser modificado no menor número de lugares possível.

Então, no React, você sempre precisará alterar o estado de forma declarativa através da função ```setState```. Não se preocupe, veremos isso mais pra frente.

### Virtual DOM

O React é rápido porque cria uma representação da DOM em memória, e é nessa representação que ele vai calcular as diferenças para decidir se um componente precisa ser atualizado ou não. Ele faz isso para diminuir o número de operações na DOM, pois isso é um trabalho custoso. Outras bibliotecas estão adotando isso, inclusive AngularJS na versão 2 ;).

## Pondo a mão na massa

Vamos começar adicionando React na nossa página. Abra o arquivo ```src/app.js```. Ele deve ser parecido com:

```js
'use strict';

console.log('just react it!');
```
Apague a linha do ```console.log``` e me acompanhe.

Vamos começar importando o React e ReactDOM.

```js
import React from 'react';
import ReactDOM from 'react-dom';
```

ReactDOM é o cara responsável por adicionar nosso componente na DOM (logo veremos isso).

Vamos criar um super componente que imprime um título 'Hello, React!'.

```js
class HelloComponent extends React.Component {
  render() {
    return <h1>Hello, React!</h1>;
  }
}
```

**PARA TUDO, QUE M&%$ É ESSA??**

Não, você não está louco, fizemos isso mesmo. Nosso HTML agora faz parte do JS.
Mas pode isso, Arnaldo? Pode sim, graças ao JSX. Você não precisa escrever React dessa maneira, mas para de ser chato!

Se você acessar a página não vai ver nada, é aí que entra o nosso amigo ReactDOM. Bora renderizar nosso componente massa!

```js
ReactDOM.render(<HelloComponent />, document.getElementById('app'));
```

Agora você deve ver 'Hello, React!' na página.

Viu? Ótimo, agora vamos entender umas paradas.

Notaram que o nossa classe se tornou um 'elemento' HTML? A ideia do React é essa, nós vamos criar componentes e usá-los como se fossem elementos HTML.

Legal, mas e isso ```document.getElementById('app')```? Aqui nós falamos para o React onde ele deve renderizar nosso componente. Se você abrir o arquivo ```src/index.html``` vai ver que lá existe ```<div id="app">```, então é dentro desse cara que nosso componente será renderizado.

Está duvidando? Abra a inspeção de elementos do seu navegador, vai ver que dentro da div existe o conteúdo do nosso componente, algo parecido com ```<h1 data-reactroot>Hello, React!</h1>```

Entendeu o porquê do React não atrapalhar código existente no seu projeto? Basta dizer em qual elemento seu novo componente estará e pronto. It works :D

## Pondo a mão na massa pra valer

Ótimo, agora você já é quase um sênior em React :P. Então vamos começar nosso TodoApp de verdade, e no caminho vamos entendendo algumas paradas novas.

### Material UI

Como nós somos cool, vamos usar Material Design, então instale os seguinte pacotes:

```npm i --save react-tap-event-plugin material-ui```

Nãoo se esquece de importar a fonte Roboto no arquivo ```src/index.html```

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900">
```

Todos os componentes que formos usar do ```material-ui``` devem ficar dentro do componente ```MuiThemeProvider```. Para testarmos a intalação do material-ui, altere o ```app.js``` para ficar assim:

```js
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class HelloComponent extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <RaisedButton label="Funcionoooooooou"/>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<HelloComponent />, document.getElementById('app'));
```

Viu que bonito o botão? :B

[Documentação do Material UI](http://www.material-ui.com/)

**Psiu**

Remova o ```margin``` e ```padding``` do ```body``` em ```src/index.html```:
```html
  <style>
    body {
      margin: 0;
      padding: 0;
    }
  </style>
```

### AppBar

Vamos 'começar' criando um AppBar.

Deixa o ```app.js``` assim:

```js
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ReacTodo extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<ReacTodo />, document.getElementById('app'));
```

Vamos importar o componente ```AppBar```

```js
import AppBar from 'material-ui/AppBar';
```

Agora é só adicionar no nosso componente principal.

```js
return (
  <MuiThemeProvider>
    <AppBar title="ReacTodo"/>
  </MuiThemeProvider>
);
```

[[https://github.com/igor-ribeiro/reactodo/blob/master/example-images/app-bar.png|alt=AppBar]]
Saca só que maaaaaaassa!

