# Atomic Design SEED

Essa é a **minha** estrutura de Atomic Design do BACKEND automatizada.

Ela está atualmente na sua versão 4.0 pois foi baseada [nessa arquitetura Atômica inicial](https://github.com/Webschool-io/Node-Atomic-Design-Modelo-Padrao)

Como eu sempre percebo padrões na minha programação decidi criar um automatizador para meus módulos já iniciarem com um CRUD (aumentado) sem muito esforço, bom então bora explicar como funciona.


## Ideia - Conceito

Criei essa arquitetura pois estava cansado de repetir as mesmas coisas, por isso pensei:

> Cada coisa que eu modularizar eu posso reutilizar em outro Sistema.


Logo a primeira necessidade que percebi vinha do Frontend, pois:

> Se eu quiser usar um campo com nome `email` quero que o input tenha o `type=email` e com sua validação já integrada, o que acho que é o mínimo já que qualquer dev já teve que fazer ou usar um campo chamado `email` em algum Projeto.

Nada mais simples que apenas **reaproveitar** o que já foi criado.

> Minha ideia é reusar todo o código criado anteriormente!

## Arquitetura - Backend

No Atomic Design devemos pensar do micro para o macro, porém entendo o quão isso possa parecer contra-intuitivo, por isso na **minha** arquitetura você pode iniciar pensando nas **Entidades** que compõe seu Sistema, entretanto essa Entidade é composta de (ainda refatorarei a nomenclatura para nomes mais comuns):

- rotas: entrada de cada requisição
  - organelas: funções executadas nas rotas
    - ribossomos: callbacks de sucesso e erro das Organelas
    - helpers: funções ajudantes para as Organelas
- organismo: tipo de um Controller
  - moléculas: tipo de um Schema
    - átomos: os campos que compõe uma Molécula
      - hadrons: estrutura que agrega o campo à sua validação
        - quarks: função de validação




### Pastas Globais

Para facilitar o reuso entre os módulos de um mesmo sistema decidi colocar os micro-módulo em pastas na raíz `/` utilizando o prefixo `_` e elas são:

- _atoms
- _config
- _factories
- _hadrons
- _organelles
- _quarks

Além das pastas `dump` e `modules`, é na `modules` onde iremos criar nossos módulos que irão utilizar módulos dessas pastas globais.

#### _atoms

Nessa pasta criaremos qualquer átomos(campo) necessário para nosso Módulo, porém como reutilizamos diversos campos em diferentes Sistemas e até mesmo em diferentes Módulos, criei uma arquitetura onde você possa criar UM campos apenas UMA vez e depois só reutiliza-lo.

Para que a automatização seja possível eu criei um certo padrão de arquivos e nomenclatura, então vamos iniciar, como exemplo, a fazer um módulo de Cursos baseando-se no já existente Módulo de `User`, para isso vamos definir **minimamente** seus átomos:

- name
- description

```js
// _atoms/name.js
const CONFIG = require('./../_config/atoms')(__filename)
const DEFAULT = {
  ATOM_NAME: CONFIG.ATOM_NAME,
  VALIDATE: false
}
const PROPS = {
  type: String,
  // required: true
}

const atomConfig = Object.assign({}, DEFAULT, PROPS)

const Atom = require('./../_factories/atom')(atomConfig)

module.exports = Atom
```

```js
// _atoms/description.js

const CONFIG = require('./../_config/atoms')(__filename)
const DEFAULT = {
  ATOM_NAME: CONFIG.ATOM_NAME,
  VALIDATE: false,
}
const PROPS = {
  type: String
}

const atomConfig = Object.assign({}, DEFAULT, PROPS)

module.exports = require('./../_factories/atom')(atomConfig)
```

*ps: esses 2 átomos já existem na nossa estrutura, não precisa recriar*

Perceba que o primeiro Objeto a ser configurado é o `DEFAULT`, o qual contém `ATOM_NAME`.

> Porém de onde vem esse valor?

Analise comigo essa linha:

```js
const CONFIG = require('./../_config/atoms')(__filename)
```

Percebeu que estamos passando a constante `__filename` para o módulo `_config/atoms`?

Falarei mais sobre ele adiante, porém para explicar será mais fácil mostrar o código desse módulo:

```js
const VALIDATE_TYPE = 'Mongoose'
const VALIDATE_FACTORY = 'factory' +VALIDATE_TYPE+ 'Validate'
const VALIDATE_FACTORY_PATH = './../_hadrons/'  + VALIDATE_FACTORY

module.exports = (_file) => {
  const ATOM_NAME = _file.toLowerCase()

  return {
    ATOM_NAME,
    VALIDATE_FACTORY_PATH
  }
}
```

Logo ele irá retornar o nome do átomo, pois ele é definido pelo **nome do seu arquivo**, além de `VALIDATE_FACTORY_PATH` que irei comentar mais a frente.

#### _config

#### _factories

#### _hadrons

#### _organelles

#### _quarks

### Rotas


### Organelas

### Ribossomos

### Helpers

### Organismo

### Moléculas

### Átomos

### Hadrons

### Quarks
