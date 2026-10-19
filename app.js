const express = require('express');
const app = express();
const tasksRoutes = require('./routes/tasks');
const logger = require('./middleware/logger');


app.use(logger);
app.use(express.json());
app.use('/tasks', tasksRoutes);

app.get('/', (req, res) => {
  res.send('API is running');
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
  });
}

module.exports = app;
