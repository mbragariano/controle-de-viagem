import express from 'express';

import routes from './routes';
import { errorHandler } from './middleware';

const application = express();

application.use(express.json());
application.use(express.urlencoded({ extended: false }));

application.use('/api', routes);

application.use(errorHandler);

export default application;
