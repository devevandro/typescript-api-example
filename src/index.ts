import express, { urlencoded } from "express";
import cors from 'cors';
import helmet from 'helmet';
import { mainRouter } from './routes/main';

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(urlencoded({ extended: true }));
const PORT = process.env.PORT || 3030;

app.use(express.json());

app.use('/api', mainRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
