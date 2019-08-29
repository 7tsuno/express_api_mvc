import express from 'express';
import config from './config/config';
import router from './routes/api';

const app = express();

app.listen(config.port);
console.log('Your server is running on ' + config.port);

router(app);
