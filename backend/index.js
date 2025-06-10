import express from 'express';
import loginRoute from './routes/loginRoute.js';

const app = express();
app.use(express.json());
app.use('/api', loginRoute);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
