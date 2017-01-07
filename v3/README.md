# Atomic Design - Factories

## Como fazer

- basta copiar uma pasta que exista em modules
- mude seu nome para o nome do módulo **NO SINGULAR**
- abra o arquivo `config.module.js`
  + adicione (o nome das )suas funções específicas em `organelles`
- abra o arquivo `molecular.structure.js`
  + adicione o nome dos campos dessa Entidade

```js
const name = require('./../../_config/module/getName')(__filename)
const organelles = [
  'findByFilter',
  'findByIdPopulate',
  'findAllPopulate'
]
const molecule = {
  structure: require('./molecular.structure')
}
const organism = { name, organelles }
const DNA = { organism, molecule }

module.exports = require('./../../_factories/module')(DNA)
```

```js
module.exports = [
  'name',
  'description',
  'vagas',
  'owner',
  'employes',
  'created_at'
]
```

**Todos os módulos são gerados com suas rotas para uma API de CRUD com as seguintes funções automaticamente: `['create', 'find', 'findOne', 'findById' ,'update', 'remove']`**. Mais as definidas na configuração do seu módulo.