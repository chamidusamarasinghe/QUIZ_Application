import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoutes.js';
import resultRouter from './routes/resultRoutes.js';

const app = express();
const PORT = 4000;

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//DB
connectDB();

// ROUTES
// expose user routes under both /api/users and /api/auth for compatibility
app.use('/api/users', userRouter);
app.use('/api/auth', userRouter);
app.use('/api/result',resultRouter);

app.get('/', (req,res) => {
    res.send("API Working");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});