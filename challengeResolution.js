// Entrada de dados
const bugsList = [
  {
    id: 1,
    title: 'Convidados não conseguem confirmar a presença em um evento',
    age: '1 dia',
    priority: 'Crítico',
  },
  {
    id: 2,
    title: 'Lista de convidados com cortados na barra vertical',
    age: '2 dia',
    priority: 'Normal',
  },
  {
    id: 3,
    title: 'Lista de presentes não é visualizada por convidados',
    age: '2 dia',
    priority: 'Crítico',
  },
  {
    id: 4,
    title: 'Filtro da categoria `Batizados` não está retornando os convites corretos',
    age: '3 dia',
    priority: 'Normal',
  },
];

const listBugIdsToFixToday = (bugsList) => bugsList.reduce((arr, crr) => {
    if (crr.priority === 'Crítico') arr.push(crr.id);
    return arr;
  }, []);

const bugsFixToday = listBugIdsToFixToday(bugsList);

//Saída esperada de dados
console.log(bugsFixToday); // array -> [1, 3]
