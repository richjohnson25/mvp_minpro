import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from './routers';

const app: Express = express();
app.use(cors())
const port: Number = 8000;

app.use(express.json())
app.use(router)

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Welcome to Tracker Expenses API</h1>')
})

// Centrallized error
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status || 500).send({
        error: true,
        message: error.message || 'Something went wrong!',
        data: {}
    })
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});