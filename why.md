# Micro Frontends

Micro frontends oferecem benefícios interessantes, como escalar a codebase de forma rápida e prover uma melhor experiência do usuário.

O que são micro frontends?

- São pequenas partes de uma aplicação que quando colocadas juntas são capazes de proporcionar uma experiência completa do produto.

Como saber se são uma boa solução para o produto?

- Ter um grande produto dividido em diversos times é um bom indício.
- Outra abordagem que pode ser considerada é quando precisamos quebrar nossa codebase, por exemplo, ao criar um npm package.
- Em grandes codebases, linting, prettier, testes unitários, testes integrados, começam a se tornar mais custosos e demorados. Da mesma forma, fazer rollbacks e tratativas se torna cada vez mais penoso.

Como começar com micro frontends?

- Definir uma divisão vertical ou horizontal do produto:<br/>
  A escolha deve ser baseada no nível de encapsulamento necessário, requisitos de segurança, capacidade de implementação independente e necessidade de uma interface de usuário consistente. Cada micro frontend deve ser de propriedade de uma equipe independente e mapear seu próprio domínio de negócio ou unidade única.[¹](https://microfrontend.dev/architecture/micro-frontends-architecture/)
  - Divisão vertical: por funcionalidade ou domínios de negócio.
  - Divisão horizontal: por equipes ou partes da interface do usuário.
- Desenvolvimento indepentende:<br/>
  Promover o desenvolvimento indepentende de cada micro frontend permite que as equipes operem como unidades autônomas dentro de um projeto maior. Cada módulo se comporta como uma entidade autônoma, responsável por uma funcionalidade ou recurso específico. Isso acelera o processo de desenvolvimento, reduz gargalos e permite que os desenvolvedores se especializem em seu domínio específico. [²](https://www.turing.com/blog/micro-frontends-what-are-they-when-to-use-them/)
- Autonomia do módulo:<br/>
  Cada módulo deve ser projetado para ser auto-suficiente e auto-resiliente, não necessitando de outras partes da aplicação para funcionar corretamente. Isso facilita o desenvolvimento e a implantação de módulos individuais, além de isolar falhas, melhorar a escalabilidade e permitir a flexibilidade e pilhas tecnológicas.[²](https://www.turing.com/blog/micro-frontends-what-are-they-when-to-use-them/)
- Gerenciamento de estados: <br/>
  Para evitar o acoplamento excessivo entre mfes, especialmente quando se usa bibliotecas de gerenciamento de estado como Redux ou MobX, é recomendável tratar os dados de um micro frontend como uma fonte de dados externa para o outro. Uma abordagem comum de usar é um sistema de publicação/assinatura ([pub/sub](https://cloud.google.com/pubsub/docs/overview?hl=pt-br)) para sincronizar os dados, permitindo que cada um mantenha seu próprio estado e sincronize por meio de eventos. [³](https://dev.to/dr_anks/micro-frontends-dos-donts-tools-and-scaling-strategies-3n4o)
- Componentização e Composição:<br/>
  Adotar uma abordagem de componentização e composição facilita a integração e a comunicação entre micro frontends. Isso pode ser alcançado através de Web Components, que permitem criar componentes reutilizáveis e encapsulados que podem ser integrados em diferentes partes da aplicação. Além disso, a arquitetetura deve permitir a composição de diferentes partes da aplicação em uma interface de usuário coesa.[¹](https://microfrontend.dev/architecture/micro-frontends-architecture/)
- Otimização do Código e Estratégias de Carregamento de Componentes:<br/>
  É importante otimizar o código para garantir que cada mfe carregue e execute de forma eficiente. Isso pode incluir a implementação de estrátegia de carregamentos de componentes, como o Lazy Loading, visando melhorar a experiência do usuário.[¹](https://microfrontend.dev/architecture/micro-frontends-architecture/)

Polirepo vs. Monorepo

Utilizar polirepos pode parecer uma boa idéia para alguns times, pois permite muita autonomia, histórico limpo de alterações, histórico de versões bem documentado e a criação de artifacts únicos. Mas também pode trazer como consequência um grande workspace, com configurações e dependências separadas em de diversos repositórios.

Já no modelo de monorepo o gerenciamento de dependências e configurações se torna muito mais fácil, sem prejudicar a autonomia dos times. Por exemplo, a utilização de codeowners no Github permite a seleção de diferentes aprovadores baseado no diretório. O monorepo é uma ferramenta muito poderosa quando utilizada da forma correta.

Ferramentas de micro frontend

- [Single SPA](https://single-spa.js.org/):<br/>
  É framework de MFE que atua como um roteador para aplicações individuais, gerenciando o carregamento de módulos de frontend conforme o necessário, sem a necessidade de recarregar toda a página.
- [Module Federation](https://module-federation.io/):<br/>
  É um plugin do Webpack 5 que permite que diferentes aplicações web, ou partes de uma aplicação, compartilhem e consumam módulos em tempo de execução (runtime). Oferece diversos benefícios em relação ao SingleSPA como o suporte para server-side render.
