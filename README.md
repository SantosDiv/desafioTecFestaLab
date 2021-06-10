# Desafio FestaLab 🥳
## Proposta do desafio
Desenvolver um método (ou função) que receba que como entrada uma lista de bugs e retornar o id daqueles que devem ser resolvidos hoje.

## Resolução aplicada
Para a resolução do desafio, fiz uso da linguagem `javascript`, com a Higher-order function (HOF) chamada: `reduce`.

### Estrutura de entrada (exemplo)
Como estrutura de entrada, escolhi por um array de objetos, tendo em vista que cada bug precisa ter três informações distintas. Assim, o objeto me auxilia a guardar essas informações de forma mais dinâmica.

```js
// Tipo de dados de entrada
const bugsList = [
  {
    id: 1,
    title: "Convidados não conseguem confirmar a presença em um evento",
    age: "1 dia",
    priority: "Crítico",
  },
  {
    id: 2,
    title: "Lista de convidados com cortados na barra vertical",
    age: "2 dia",
    priority: "Normal",
  },
  {
    id: 3,
    title: "Lista de presentes não é visualizada por convidados",
    age: "2 dia",
    priority: "Crítico",
  },
  {
    id: 4,
    title: "Filtro da categoria `Batizados` não está retornando os convites corretos",
    age: "3 dia",
    priority: "Normal",
  },
];
```

### Resolução aplicada
```js
const listBugIdsToFixToday = (bugsList) => bugsList.reduce((arr, crr) => {
    if (crr.priority === "Crítico") arr.push(crr.id);
    return arr;
  }, []);
```

### Chamada da função
Para fazer a chamada da função, passa-se o array gerado anteriormente como parâmetro da mesma e como saída (resposta) temos um novo array com os `ids` dos bugs a serem resolvido hoje (Crítico).
```js
const bugsFixToday = listBugIdsToFixToday(bugsList);

// Saída esperada de dados
console.log(bugsFixToday); // array -> [1, 3]
```
A resposta da fução está sendo guardada em uma variável apenas como uma sugestão de um uso futuro para trabalhar esses dados.

## Sugestões de melhorias no código
Como sugestão de melhoria, pode-se mudar a forma de determinar um bug `crítico` ou `normal`. Ao invés de utilizar as palavras, que é passível de futuros erros, pode-se fazer uso de um numeral para cada bug. Caso crítico seria o numeral `5` caso normal o numeral `1` (por exemplo). Aplicado a uma nova chave chamada `nivelDoBug`.

Uma outra sugestão de melhoria do código, seria um retorno do id e da descrição do bug, para melhor ajudar no entendimento da resolução. 😄

> Obs: Este repositório ficará privado após a avaliação do mesmo :D