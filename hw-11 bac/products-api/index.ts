import express, { type Request, type Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

type Product = {
  id: number;
  name: string;
  price: number;
};

let products: Product[] = [
  { id: 1, name: 'Product One', price: 29.99 },
  { id: 2, name: 'Product Two', price: 49.99 },
];

app.get('/products', (req: Request, res: Response) => {
  res.json(products);
});

app.get('/products/:id', (req: Request, res: Response) => {
  const idParam = req.params.id;
  if (!idParam) return res.status(400).json({ message: 'Product ID is required' });
  const id = parseInt(idParam);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

app.post('/products', (req: Request, res: Response) => {
  const { name, price } = req.body;
  if (!name || price === undefined) {
    return res.status(400).json({ message: 'name and price are required' });
  }
  const newProduct: Product = {
    id: products.length ? Math.max(...products.map(p => p.id)) + 1 : 1,
    name,
    price,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
