import express, { json } from 'express';
import cors from 'cors';
import {videoRoutes} from './routes/video.js';
import navigateRoutes from './routes/navegacion.js';

const app = express();
app.use(json());
app.use(cors());
app.disable('x-powered-by');

const PORT = process.env.PORT ?? 3320;

app.use('/videos', videoRoutes);
app.use('/navegacion', navigateRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});