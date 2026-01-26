import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

// Middleware для парсинга JSON в теле запроса
app.use(express.json());

// GET-маршрут
app.get('/', (req: Request, res: Response) => {
  res.send('Привет! Это простое Express-приложение с TypeScript.');
});

// POST-маршрут
app.post('/data', (req: Request, res: Response) => {
  const receivedData = req.body;
  res.json({
    message: 'Данные успешно получены',
    receivedData: receivedData
  });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
