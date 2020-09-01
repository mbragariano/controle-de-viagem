import { Router } from 'express';

import userRoutes from '../../modules/user/infrastructure/presentation/routes';

const router = Router();

router.use(userRoutes);

export default router;
