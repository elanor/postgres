const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors(
  {origin: 'http://localhost:3000'} // Разрешите только этот домен
)); 


app.use(express.json()); // Для парсинга JSON тел запросов

const pool = require('./db');

console.log('indexjs file launched!')
// Получение всех животных
app.get('/animals', async (req, res) => {
    try {
        const allAnimals = await pool.query("SELECT * FROM animals");
        res.json(allAnimals.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// Добавление нового животного
app.post('/animals', async (req, res) => {
    try {
      const { name, species, age } = req.body;
      const newAnimal = await pool.query(
        "INSERT INTO animals (name, species, age) VALUES ($1, $2, $3) RETURNING *",
        [name, species, age]
      );
      res.json(newAnimal.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: "Server error" }); // Пример отправки ошибки клиенту
  }
  
});


// Остальные CRUD операции (обновление, удаление) могут быть реализованы аналогично

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
