import { Router } from 'express';
import { TreeController } from '../controllers/treeController';

const router = Router();

router.post('/execute', TreeController.executeTree);

export default router;