// src/server.js
const app = require('./app');

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
  {
    id: 3,
    name: 'Cruzeiro Esporte Clube',
    initials: 'CEC',
  },
  {
    id: 4,
    name: 'Clube Regatas Flamengo',
    initials: 'CRF',
  },
  {
    id: 5,
    name: 'America Futebol Clube',
    initials: 'AFM',
  },
];

app.get('/', (_req, res) => res.status(200).json({ message: 'Hello Word!' }));

app.get('/teams', (_req, res) => res.status(200).json(teams));

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);
  res.status(201).json({ team: newTeam });
});

app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const updateTeam = teams.find((team) => team.id === Number(id));
  console.log('ola');
  if (!updateTeam) {
    res.status(404).json({ updateTeam });
  }
  updateTeam.name = name;
  updateTeam.initials = initials;
  res.status(200).json({ updateTeam });
});

app.listen(3001, () => console.log('server running on port 3001'));