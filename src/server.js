// src/server.js
const app = require('./app');

app.get('/', (req, res) => res.status(200).json({ message: 'Hello Word!' }));

app.listen(3001, () => console.log('server running on port 3001'));