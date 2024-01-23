import React, { useState, useEffect } from 'react';

function Animals() {
  const [animals, setAnimals] = useState([]); // Состояние для хранения данных о животных

  useEffect(() => {
    // Получаем данные о животных при загрузке компонента
    fetch('http://localhost:5000/animals') // Обращаемся к маршруту /animals на сервере
      .then(response => response.json())
      .then(data => setAnimals(data)) // Обновляем состояние animals данными, полученными с сервера
      .catch(error => console.error("Ошибка при получении данных о животных:", error));
  }, []); // Пустой массив зависимостей означает, что эффект выполнится один раз при монтировании компонента

  return (
    <div>
      <h2>Список животных</h2>
      <ul>
        {animals.map(animal => (
          <li key={animal.id}>{animal.name} - {animal.species} - {animal.age} лет</li>
        ))}
      </ul>
    </div>
  );
}

export default Animals;
