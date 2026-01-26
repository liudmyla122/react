import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;


app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  res.send('Привет! Это простое Express-приложение с TypeScript.');
});


app.post('/data', (req: Request, res: Response) => {
  const receivedData = req.body;
  res.json({
    message: 'Данные успешно получены',
    receivedData: receivedData
  });
});


app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
