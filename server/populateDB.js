const pool = require('./db'); // Импортируем конфигурацию подключения к базе данных

async function populateDB() {
  const animals = [
    { name: 'Барсик', species: 'Кот', age: 3 },
    { name: 'Шарик', species: 'Собака', age: 5 },
    { name: 'Черныш', species: 'Кот', age: 1 },
    // Добавьте столько записей, сколько вам нужно
  ];

  try {
    for (let animal of animals) {
      const { name, species, age } = animal;
      await pool.query("INSERT INTO animals (name, species, age) VALUES ($1, $2, $3)", [name, species, age]);
      console.log(`Животное добавлено: ${name}`);
    }
  } catch (err) {
    console.error(err.message);
  } finally {
    pool.end(); // Закрываем подключение к базе данных
  }
}

populateDB();
