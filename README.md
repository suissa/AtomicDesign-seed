# Atomic Design SEED

Essa é a **minha** estrutura de Atomic Design do BACKEND automatizada.

Ela está atualmente na sua versão 4.0 pois foi baseada [nessa arquitetura Atômica inicial](https://github.com/Webschool-io/Node-Atomic-Design-Modelo-Padrao)

Como eu sempre percebo padrões na minha programação decidi criar um automatizador para meus módulos já iniciarem com um CRUD (aumentado) sem muito esforço, bom então bora explicar como funciona.

## Arquitetura - Backend

No Atomic Design devemos pensar do micro para o macro, porém entendo o quão isso possa parecer contra-intuitivo, por isso na **minha** arquitetura você pode iniciar pensando nas **Entidades** que compõe seu Sistema, entretanto essa Entidade é composta de (ainda refatorarei a nomenclatura para nomes mais comuns):

- rotas
  - organelas
    - ribossomos
    - helpers
- organismo
  - moléculas
    - átomos
      - hadrons
        - quarks


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
