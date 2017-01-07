# Atomic Design - Factories

> Bem vindo ao mundo atômico do JavaScript!

![](http://www.womenatworkmuseum.org/atomic1.gif)

Podemos separar em 3 áreas, para facilitar, essa arquitetura:

- routes
- organism/molecule
- atoms

Porém como estamos trabalhando com o Atomic Design vamos iniciar pelos átomos.

> O que são *esses* átomos?


Nessa minha arquitetura eu criei uma analogia dos átomos com os campos de um *Schema*, pois eles devem ser independentes para que possamos reusa-los.

Se você pensar em campos de uma tabela os átomos são exatamente eles, mas por que modularizar isso?

> Fácil! Para reusar e nunca ter que escrever a mesma coisa, tendo em vista que os campos possuem quase o mesmo comportamento independente do sistema.

Darei um exemplo bem usual, o campo/átomo de CPF. Esse campo sempre terá o mesmo formato e a mesma validação, até que mudem ele. :p

> Então porque ficar copiando e colando código sendo que podemos apenas usa-lo?

Bom mas não para por aí, porque os átomos são compostos de *Quarks* e sim também uso-os nessa arquitetura.

Os *Quarks* são nossas funções de validação, onde você pode ir compondo uma validação maior reusando as validações menores já existentes. Por exemplo o próprio validador do CPF que reusa as validações de `isEmpty` e `isString`.

Então quando formos iniciar um sistema, após modelarmos sua coleção/tabela precisamos criar os átomos/campos que ainda não existem assim como seus *quarks* de validação. Após essa etapa iremos agrega-los para gerar uma Molécula/Schema.

Depois de exportamos a Molécula utilizaremos ela para criar o Organismo que pode ser comparado com um *Controller*, pois é nele que estarão as ações a sempre utilizadas nas rotas da nossa API.

Após termos o Organismo criado iremos utilizar suas funções nas rotas.

> **MUITO SIMPLES NÉ!?**

## Estrutura


Antes de entramos nesse assunto precisamos entender quais são as partes que compõe essa estrutura.

Vamos iniciar pelas rotas, provavelmente você está acostumado a ter apenas 1 arquivo para rotas, correto?

Aqui nós teremos pelo menos 5 arquivos separados mais 1 arquivo para cada rota.

> UUUUUU QUEEEE?????!!!!

Fiz isso para modularizarmos de uma forma que possamos reusar essas rotas em outros frameworks e sistemas.

### Estrutura - Rotas 

Para deixarmos as rotas agnósticas de framework a primeira coisa que modularizamos é o *Router* do Express, `routes/routerExpress.js`:

```js
module.exports = require('express').Router()
```

Depois precisamos ter a configuração das nossas rotas em um módulo separado, `routes/index.js`:

```js
module.exports = (Organism) => ([
  require('./get.find')(Organism),
  require('./get.findById-populate')(Organism),
  require('./put.update')(Organism),
  require('./delete.remove')(Organism),
  require('./post.create')(Organism)
])
```

Como você deve ter percebido acima as nossas rotas estão separadas por arquivo e para importarmos elas precisamos injetar o *Organism* em cada uma, isso para que a mesma possa ser usada por qualquer outro *Organism*.

Vamos pegar a rota `get.find.js`:

```js
const ROUTE = require('../../../_config/routes/getRouteData')(__filename)
const METHOD = ROUTE.split('.')[0]
const ACTION = ROUTE.split('.')[1]
const PATHS = require('./paths')

module.exports = (Organism) => ({
  method: METHOD,
  path: PATHS.base,
  action: Organism[ACTION]
})
```

No arquivo `getRouteData` temos a função que recebe o caminho do `__filename` dessa rota para pegar, pelo nome do seu arquivo, o método e a função a ser executada nessa rota:

```js
module.exports = (_file) => _file.split('routes')[1].slice(1)
```

Então nosso padrão de nomenclatura para cada rota é: `METHOD`.`ACTION` e o `path` eu deixo armazenado em um módulo bem simples, por hora, mas que pode vir a ficar complexo:

```js
module.exports = {base: '/', id: '/:id'}
```

### Estrutura - Pastas

Como utilizamos uma estrutura atômica/modular para que possamos reaproveitar ao máximo tudo que criarmos possuimos algumas pastas *"globais"* para o projeto, pois os módulos apenas usarão o que já tiver sido criado.

Essas pastas são:

- _atoms
- _config
- _factories
- _hadrons
- _organelles
- _quarks

Falarei sobre cada uma.

### \_atoms

### \_config

### \_factories

### \_hadrons

### \_organelles

#### ribossomos

### \_quarks

### modules

## Como fazer

Tudo começa pela configuração do nosso projeto.

### Configurações

Quando configuramos o projeto só precisamos mudar 2 valores:

- PROJECT_NAME
- MOLECULE_FACTORY

O `PROJECT_NAME` nem preciso explicar né, mas para garantir já aviso que você precisa colocar o nome exatamente como está escrito na sua pasta. E o `MOLECULE_FACTORY` é o nome da sua *factory* de *Model*, que nesse caso é  *Mongoose*, o código dele não podia ser mais simples:

```js
module.exports = (Formula) => require('mongoose').Schema(Formula)

```

Pois futuramente basta você criar um módulo específico para a biblioteca que for usar.

Essa é nossa configuração do projeto, **FAVOR NÃO MEXER NOS OUTROS VALORES!**

```js
// _config/project
const PROJECT_NAME = 'factories'
const PROJECT_PATH =  __dirname.split(PROJECT_NAME)[0]+PROJECT_NAME
const QUARKS_PATH = PROJECT_PATH + '/_quarks/'
const ATOMS_PATH = PROJECT_PATH + '/_atoms/'
const FACTORIES_PATH = PROJECT_PATH + '/_factories/'
const ORGANISM_FACTORY = FACTORIES_PATH + 'organism'
const MOLECULE_FACTORY = FACTORIES_PATH + 'molecule.mongoose'
```

Depois disso você deve começar a criar os átomos que ainda não existem no nosso repositório para que possa usá-los no sistema.

> Tudo que você fizer terá que ser encapsulado em um módulo, não deves mexer em nenhum código interno. #ficadica


Vamos usar um exemplo simples de módulo usando os átomos já existentes.

Para iniciar você deve criar uma pasta dentro de `modules`, por exemplo: `User`.

E nela precisará definir qual sua estrutura molecular, ou seja, quais campos/átomos fazem parte desse módulo, por exemplo:

```js
// modules/User/molecular.structure.js
module.exports = [
  'name',
  'email',
  'created_at'
]
```

Esse arquivo será utilizado pelo `config.module.js` que é um arquivo obrigatório dentro de cada módulo, o qual contém esse código:

```js
const name = require('./../../_config/module/getName')(__filename)
const organelles = []

const molecule = {
  structure: require('./molecular.structure')
}
const organism = { 
  name
  // organelles
}

const DNA = {
    organism,
  molecule
}
const Cell = require('./../../_factories/module')(DNA)

module.exports = Cell
```

Inicialmente ele importa o arquivo `_config/module/getName` passando `__filename` para que essa função retorne o nome do módulo, esse é seu código caso você precise modificar algo:

```js
const CONFIG = require('./../project')

module.exports = (_file) =>
  _file
    .split(CONFIG.PROJECT_NAME)[1]
    .split('modules')[1]
    .split('config.module.js')[0]
    .replace(/\//g, '')
    .replace(/\\/g, '')
```

O *Array* vazio de *organelles* está assim pois não precisamos passar nenhuma função específica para a geração desse módulo pois o mesmo já virá com todas as funções de CRUD por padrão.

Depois criamos o **DNA** desse módulo e passamos para a *factory* do *module* que retorna nosso *Organism* para podermos exportar:

```js

const DNA = {
    organism,
  molecule
}
const Cell = require('./../../_factories/module')(DNA)

module.exports = Cell
```

